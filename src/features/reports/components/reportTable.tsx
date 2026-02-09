import React from 'react'
import { ReportsTable } from '@/components/theme/CustomTable'
import { reportsData } from '../Data'
function reportTable() {
  return (
    <div>
      <ReportsTable title={['location', 'views']} data={reportsData} />
    </div>
  )
}

export default reportTable
