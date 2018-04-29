import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CategoryItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    /**
     * Method to render the list of items in a given category
     * @param {array} list - The list of items in a given category
     */
    renderCategoryList(list) {
        if (list && list.length) {
            const listNodes = list.map(item => {
                return (
                    <ListGroupItem
                        header={item.title ? item.title : item.name}
                        key={item.id}>
                        {item.description ? item.description : item.classification}
                    </ListGroupItem>
                );
            });
            return (
                <div>
                    {listNodes}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="category-item-list">
                <ListGroup>
                    {this.renderCategoryList(this.props.selectedCategory)}
                </ListGroup>
            </div>
        );
    }
}

CategoryItems.propTypes = {
    selectedCategory: PropTypes.array
};

export default CategoryItems;
