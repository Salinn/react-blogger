//React
import React, {Component} from 'react';
import { object, func, } from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
//Components
import Search from '../components/search/Search';

class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.inputValueChanged = this.inputValueChanged.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    inputValueChanged(event) {
        const eventValues = {value: event.target.value, name: event.target.name, required: event.target.required, pattern: event.target.pattern};
        this.props.actions.inputValueChanged(eventValues);
    }

    handleOnClick() {
        console.log(this.props.search.fields);
        this.props.actions.submitUserInfo( { fieldInfo: this.props.search.fields } );
    }

    render() {
        const { search } = this.props;

        return (
           <Search search={search} inputValueChanged={this.inputValueChanged} onClick={this.handleOnClick} />
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