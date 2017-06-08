//React
import React, {Component} from 'react';
import {object} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
//Components
import Search from '../components/search/Search';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Search />
        );
    }
}

SearchScreen.propTypes = {
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

export default connect(mapStateToProps, MapDispatchToProps)(SearchScreen)