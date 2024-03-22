// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormatted = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {VaccinationCoverageDetails} = props

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        height={800}
        width={900}
        data={VaccinationCoverageDetails}
        margin={{
          top: 10,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'roboto',
          }}
        />
        <YAxis
          tickFormatted={dataFormatted}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1.5,
            fontSize: 15,
            fontFamily: 'roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="dose 1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="40%"
        />
        <Bar
          dataKey="dose2"
          name="dose 2"
          fill="#f54394"
          radius={[10, 10, 0, 0]}
          barSize="40%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
