import React from 'react'
import StackedBarChart from '@/components/theme/CustomBarChart'
import { br } from '../Data'

function ReportCharts() {
  return (
    <div>
      <StackedBarChart data={br} />
    </div>
  )
}

export default ReportCharts



