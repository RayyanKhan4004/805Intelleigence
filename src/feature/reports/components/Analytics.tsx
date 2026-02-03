'use client'
import { Button } from '@/components/UI/button'
import React from 'react'
import { br, reportsData } from '../Data'
import StackedBarChart from '@/components/theme/CustomBarChart'
import { ReportsTable } from '@/components/theme/CustomTable'

function Analytics() {
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
         <ReportsTable title={['location', 'views']} data={reportsData} />

        <StackedBarChart data={br} /> 
    </>
     


  )
}


export default Analytics
