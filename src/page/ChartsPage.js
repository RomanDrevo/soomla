import React from 'react'
import { Chart } from 'react-charts'




function ChartsPage({charts}) {

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom',  },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  if(!charts) return <div>No charts</div>


  const newCharts = Object.keys(charts).find(x => x !== "Meta Data")


  const open = Object.keys(charts[newCharts]).map(key => {

    const str = charts[newCharts][key]["1. open"]

    return [new Date(key), str]
  })

  const high = Object.keys(charts[newCharts]).map(key => {

    const str = charts[newCharts][key]["2. high"]

    return [new Date(key), str]
  })

  const low = Object.keys(charts[newCharts]).map(key => {


    const str = charts[newCharts][key]["3. low"]


    return [new Date(key), str]
  });

  const close = Object.keys(charts[newCharts]).map(key => {

    const str = charts[newCharts][key]["4. close"]

    return [new Date(key), str]
  });


  const data = [
    {
      label: 'Open',
      data: open
    },
    {
      label: 'Close',
      data: close
    },
    {
      label: 'High',
      data: high
    },
    {
      label: 'Low',
      data: low
    },

  ]


  const lineChart = (

    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  )

  return lineChart
}

export default ChartsPage
