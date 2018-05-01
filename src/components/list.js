import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Grid, Row, Col, Button } from 'react-bootstrap';
import Favorites from './favorites';

class CategoryItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryItems: undefined,
            filteredList: undefined,
            filterTerm: '',
            favorites: []
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
        this.setState({ filterTerm: e.target.value }, () => {
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
                this.setState({ filteredList: filteredItems });
            } else {
                this.setState({ filteredList: this.state.categoryItems });
            }
        });
    }

    /**
     * Method to handle click events of the add-to-favorite buttons
     * @param {object} item - The category item
     */
    handleClick(item) {
        let favorites  = this.state.favorites;
        favorites.push(item);
        this.setState({ favorites: favorites });
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
                        <span className="description">{item.description ? item.description : item.classification}</span>
                        <span className="favorite-action">
                            <Button bsStyle="info" bsSize="xsmall" onClick={this.handleClick.bind(this, item)}>Add to favorites</Button>
                        </span>
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
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
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
                    </Col>
                    <Col xs={6} md={4}>
                        <Favorites favorites={this.state.favorites} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

CategoryItems.propTypes = {
    selectedCategory: PropTypes.array
};

export default CategoryItems;
