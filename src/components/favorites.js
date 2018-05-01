import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: undefined
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.favorites && nextProps.favorites.length) {
            this.setState({ favorites: nextProps.favorites });
        }
    }

    /**
     * Method to render content in the favorites panel
     * @param {array} favorites - A list of favorites
     */
    renderFavoriteItems(favorites) {
        if (favorites && favorites.length) {
            return (
                <ListGroup>
                    {favorites.map(item => {
                        return <ListGroupItem key={item.id}>{item.title ? item.title : item.name}</ListGroupItem>;
                    })}
                </ListGroup>
            );
        } else {
            return (
                <Panel.Body>You have no favorites yet.</Panel.Body>
            );
        }
    }

    render() {
        return (
            <div className="favorites-panel">
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">My favorites</Panel.Title>
                    </Panel.Heading>
                    {this.renderFavoriteItems(this.state.favorites)}
                </Panel>
            </div>
        );
    }
}

Favorites.propTypes = {
    favorites: PropTypes.array
};

export default Favorites;