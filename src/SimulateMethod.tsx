import { useState, useEffect } from "react"
import { Scatter } from "react-chartjs-2"
import getInfiniteRate from './getInfiniteRate'

const Main = () => {
  const [chartData, setChartData] = useState({});
  const testTimes = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]

  const infinteRate1 = testTimes.map(x => {
    return {x: x, y: getInfiniteRate(x, 0.8, 1) }
  })

  const infinteRate2 = testTimes.map(x => {
    return {x: x, y: getInfiniteRate(x, 0.6, 1) }
  })

  const chart = () => {
    setChartData({
      datasets: [{
        label: 'survival rate(0.8)',
        data: infinteRate1,
        backgroundColor: 'red'
    },
    {
      label: 'survival rate(0.6)',
      data: infinteRate2,
      backgroundColor: 'blue'
    }]
  })
}
    
  const options = {
    responsive: true,
    title: { text: "Infinite rate for cell with different survival rate", display: true },
    scales: {
      yAxes: [
      
        {
          scaleLabel: {
            display: true,
            labelString: 'Infinite rate'
          },
          ticks: {
            min: 0,
            max: 1,
            stepSize: 0.1,
            beginAtZero: true
          },
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'survival rate'
        },
      }]
    }
  }

  useEffect(() => {
    chart()
  }, [])

  return (  
    <div style={{height: '40rem', width: '60rem' }}>

        <Scatter
          data={chartData}
          options={options}
        />
      </div>
  )
}

export default Main