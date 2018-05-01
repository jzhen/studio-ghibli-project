import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CategoryItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryItems: undefined,
            filteredList: undefined,
            filterTerm: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedCategory && nextProps.selectedCategory.length) {
            this.setState({
                categoryItems: nextProps.selectedCategory,
                filteredList: nextProps.selectedCategory
                
            });
        }
    }

    /**
     * Method to handle filter input change
     */
    handleChange(e) {
        this.setState({filterTerm: e.target.value}, () => {
            let items = this.state.categoryItems;
            let filterTerm = this.state.filterTerm;
            if (filterTerm && filterTerm.length) {
                let filteredItems = items.filter(item => {
                    if (item.title) {
                        return item.title.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
                    } else if (item.name) {
                        return item.name.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
                    }
                });
                this.setState({filteredList: filteredItems});
            } else {
                this.setState({filteredList: this.state.categoryItems});
            }
        });
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
            <div>
                <div className="filter-field">
                    <input type="text" value={this.state.filterTerm} name="filterTerm" id="filterTerm"
                        placeholder="Filter by title or name" onChange={this.handleChange}
                        disabled={!this.state.categoryItems} className="form-control" />
                </div>
                <div className="category-item-list">
                    <ListGroup>
                        {this.renderCategoryList(this.state.filteredList)}
                    </ListGroup>
                </div>
            </div>
        );
    }
}

CategoryItems.propTypes = {
    selectedCategory: PropTypes.array
};

export default CategoryItems;
