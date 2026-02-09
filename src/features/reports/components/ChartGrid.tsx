import React from 'react'
import ChartContainer from './ChartContainer'

const data = ['Santa Barbara ' ,  'Ventura' ]
function ChartGrid() {
  return (
    <div className='grid grid-cols-2 gap-[20px] '>
     {data.map((curr , ind)=><div><ChartContainer title={curr}/></div>)}
    </div>
  )
}

export default ChartGrid
