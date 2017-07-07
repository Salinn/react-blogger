//React
import React from 'react';
import {} from 'prop-types';
//Components
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const transformHeaders = (columns) => {
    let c = columns.filter( column => column.inUse );
    let b = c.map( cc => { return { Header: cc.label, accessor: cc.dataName } } );
    return b;
};

const Table = ({ table }) => {
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friendName: 'Jason Maurer',
        friendAge: 23,
        }
    ];
    const c = transformHeaders(table.columns);

    return (
        <ReactTable  data={data} columns={c}/>
    );
};



Table.propTypes = {};

export default Table