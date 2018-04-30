import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

const Header = props => <PageHeader>{props.title}</PageHeader>;

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Code Project'
}

export default Header;
