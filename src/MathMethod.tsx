import { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

const MathMethod = () => {
  const [chartData, setChartData] = useState({});

  const testTimes = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

  const infinteRate = testTimes.map(x => {
    const rate = 2-1/x
    if(rate< 0) return 0 
    return rate.toFixed(3)
  })

  const chart = () => {
    setChartData({
    labels: testTimes,
    datasets: [
      {
        label: 'Survival rate f(x) = 2 - 1/x',
        data: infinteRate,
        fill: false,
        borderColor: 'red',
        borderWidth: 1,
      }
    ]
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
        <Line 
          data={chartData}
          options={options}
        />
      </div>
  )
}

export default MathMethod