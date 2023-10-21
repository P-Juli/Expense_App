import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'
// valuess from App.js
const Chart = ({ valuess }) => {   
  const chartData = valuess.map((val, index) => ({
    id: val.title, // Replace 'e1', 'e2', etc. with val.title
    amount: val.amount,
  }));

  return (
    <div className='chart'>
    <ResponsiveContainer width="40%" height={200}>
      <BarChart
        width={100}
        height={100}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default Chart;
