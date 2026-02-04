'use client'
import { Button } from '@/components/UI/button'
import React from 'react'
import { br, reportsData } from '../Data'
import { ReportsTable } from '@/components/theme/CustomTable'
import ChartGrid from './ChartGrid'

function Analytics() {
  const [type, setType] = React.useState<'table' | 'chart'>('chart')
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2.5">
          <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary  ">
            Favourite
          </Button>
          <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
            All Reports
          </Button>
        </div>
        <div className="flex gap-3">
          <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
            Tressa Golden-Mills
          </Button>
          <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
            Setting
          </Button>
          <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
            Sort By
          </Button>
          <Button
            variant="roundedOutline"
            className="p-4  h-[56px] border border-app-primary bg-primary text-white"
          >
            List view
          </Button>
        </div>
      </div>
      {type === 'table' ? (
        <ReportsTable title={['location', 'views']} data={reportsData} />
      ) : (
        // <StackedBarChart data={br} />
        <ChartGrid />
      )}
    </>
  )
}

export default Analytics
