import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import {getSearchFilters} from "../../utils";

import './style.css'

const columns = [
    {
        title: 'Sno',
        dataIndex: 'sno',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'state name',
        dataIndex: 'state_name',
        width: '30%',
    },

    {
        title: 'active',
        dataIndex: 'active',
        sorter: (a, b) => a.active - b.active,
        width: '40%',
    },
    {
        title: 'cured',
        dataIndex: 'cured',
        sorter: (a, b) => a.cured - b.cured,
        width: '40%',
    },
    {
        title: 'death',
        dataIndex: 'death',
        sorter: (a, b) => a.death - b.death,
        width: '40%',
    },
];


function CasesTable({data}) {

    return (
        <div className="cases-table-wrapper">
            <Table columns={columns} dataSource={data}/>
        </div>
    )
}

export default CasesTable;
