import React from 'react'
import StackedBarChart from '@/components/theme/CustomBarChart'
import { br } from '../Data'

function ReportCharts({style}:{style?:React.CSSProperties}) {
  return (
    <div >
      <StackedBarChart data={br} style={style} />
    </div>
  )
}

export default ReportCharts



