
import ChartBar from './ChartBar'
import './Chart'

const Chart = props => {
    const dataPointValues = props.dataPoint

    return (<div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label}
        />
        )}
    </div>
    );
};

export default Chart;
