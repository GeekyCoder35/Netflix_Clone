import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function chart({title, data, grid, dataKey}) {
  return (
    <div className="chart">
      <span className="chartTitle">{title}</span>
      <ResponsiveContainer aspect={4/1} width="100%">
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="black"/>
            <Line type="monotone" dataKey={dataKey} stroke="black" />
            <Tooltip/>
            {grid && <CartesianGrid stroke="lightgrey" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
