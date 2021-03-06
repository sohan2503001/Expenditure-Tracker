import React from 'react';
import './ChartBar'

const ChartBar = props => {
    let barFillHeight = '0%';

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill'></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
