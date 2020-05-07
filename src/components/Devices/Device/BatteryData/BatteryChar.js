import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from 'recharts'

const TimeSeriesChart = (props) => {

  const barInfo = [...props.battery_history, {percent: props.battery, time: Date.now()}]

  return(
    <div>
      <h5>Battery History</h5>
      <ResponsiveContainer width = '95%' height = {300} >
        <ScatterChart>
          <XAxis
            dataKey = 'time'
            tickFormatter={timeStr => moment(timeStr).format('HH:mm')}
          />
          <YAxis 
            dataKey = 'percent' 
            name = 'Value' 
            tickFormatter = {(percent) => percent*100 + "%"}
            />
          <Scatter
            data = {barInfo}
            line = {{ stroke: '#eee' }}
            lineJointType = 'monotoneX'
            lineType = 'joint'
            name = 'Values'
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

TimeSeriesChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      value: PropTypes.number
    })
  ).isRequired
}

export default TimeSeriesChart