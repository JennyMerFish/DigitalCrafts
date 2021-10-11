import React from 'react'
import TableData from './TableData'
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


export default function Dashboard() {
    const data = useSelector((state) => state.graphData.data)
    const options = useSelector((state) => state.graphData.options)
    return (
        <div>
            <h1>Dashboard</h1>
            <Bar data={data} options={options}/>
<TableData />
        </div>
    )
}
