//React
import React, {Component} from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
//Components
import Table from '../components/table/Table';

class TableScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { table } = this.props;
        return (
            <Table table={ table } />
        );
    }
}

TableScreen.propTypes = {};

function mapStateToProps(state) {
    return {
        table: state.table,
    };
}

function MapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(searchActions, dispatch)
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(TableScreen)