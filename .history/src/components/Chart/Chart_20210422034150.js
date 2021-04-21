
import ChartBar from './ChartBar'
import './Chart'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmaximum = Math.max()

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
