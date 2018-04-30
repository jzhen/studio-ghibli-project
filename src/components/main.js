import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Header from './header';
import CategoryItems from './list';

import '../style.css';

const baseUrl = 'https://ghibliapi.herokuapp.com/';
const categories = ['films', 'species', 'vehicles'];

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: {},
            selectedCategory: undefined
        };
    }

    componentDidMount() {
        // Fetch all category data as soon as component mounted
        for (let item of categories) {
            this.fetchData(item);
        }
    }

    /**
     * Method to fetch data given the category param
     * @param {string} param - The Studio Ghibli API endpoint
     */
    fetchData(param) {
        let categoryData = this.state.categoryData;
        return fetch(baseUrl + param, { accept: "application/json" })
            .then(response => response.json())
            .then(data => {
                categoryData[param] = data;
                this.setState({ categoryData: categoryData });
            }).catch(err => {
                console.error(err);
            });
    }

    /**
     * Method to handle click events of the category buttons
     * @param {string} key - The category name
     */
    handleClick(key) {
        this.setState({ selectedCategory: this.state.categoryData[key] });
    }

    /**
     * Method to render the category buttons
     */
    renderButtonToolbar() {
        return (
            <ButtonToolbar>
                <div className="container">
                    {categories.map((item, i) => {
                        return <Button key={i} bsStyle="primary" onClick={this.handleClick.bind(this, item)}>{item.toUpperCase()}</Button>;
                    })}
                </div>
            </ButtonToolbar>
        );
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <Header title='Studio Ghibli Project' />
                    </div>
                </div>
                {this.renderButtonToolbar()}
                <div className="container">
                    <div className="row">
                        <CategoryItems selectedCategory={this.state.selectedCategory} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
