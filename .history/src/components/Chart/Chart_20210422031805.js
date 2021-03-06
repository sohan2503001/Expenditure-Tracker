import react from 'react';
import ChartBar from './ChartBar'
import './Chart'

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
        key={}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label}
        />
        )}
    </div>
}

export default Chart;