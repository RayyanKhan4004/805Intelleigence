import React from 'react'
import ChartContainer from './ChartContainer'

const data = ['1' ,  '2' ,  '3']
function ChartGrid() {
  return (
    <div className='grid grid-cols-3'>
     {data.map((curr , ind)=><div><ChartContainer title={curr}/></div>)}
    </div>
  )
}

export default ChartGrid
