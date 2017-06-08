//React
import React, {Component} from 'react';
import {object} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
//Components

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Search Screen
            </div>
        );
    }
}

Search.propTypes = {
    search: object,
};

function mapStateToProps (state) {
    return {
        search: state.search,
    };
}

function MapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(searchActions, dispatch)
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(Search)