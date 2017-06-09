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

        this.inputValueChanged = this.inputValueChanged.bind(this);
    }

    inputValueChanged(event) {
        const eventValues = {value: event.target.value, name: event.target.name, required: event.target.required, pattern: event.target.pattern};
        this.props.actions.inputValueChanged(eventValues);
    }

    render() {
        const { search } = this.props;

        return (
           <Search fields={search.fields} inputValueChanged={this.inputValueChanged} />
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