'use client'
import { Button } from '@/components/UI/button'
import React from 'react'

import ChartGrid from './ChartGrid'
import { Icon } from '@/shared/icons/Icon'
import ReportTable from './ReportTable'
import { sampleTableData } from '../Data'
function Analytics() {
  const [type, setType] = React.useState<'table' | 'chart'>('chart')
  return (
    <div className="p-[60px]">
      <div className="flex justify-between rounded-[80px]  mb-[30px] bg-app-surface items-center px-[19px] py-[20px] overflow-x-auto">
        <div className="flex gap-2.5">
          <Button
            variant="roundedOutline"
            className=" h-[56px] border border-app-primary font-medium text-[20px] rounded-[32px] "
          >
            <Icon name={'Heart'} size={24} className="!w-6 !h-6" /> Favourite
          </Button>
          <Button
            variant="roundedOutline"
            className="  h-[56px] border border-app-primary font-medium text-[20px]  rounded-[32px]"
          >
            All Reports <Icon name={'ArrowDown'} size={20} className="!w-[24px] !h-[24px]" />
          </Button>
        </div>
        <div className="flex gap-3 items-center">
          <Icon name={'Funnel'} size={20} className="!w-[36px] !h-[36px]" />
          <Button
            variant="roundedOutline"
            className="  h-[56px] border border-app-primary font-medium text-[20px]  rounded-[32px]"
          >
            Tressa Golden-Mills{' '}
            <Icon name={'ArrowDown'} size={20} className="!w-[24px] !h-[24px]" />
          </Button>
          <Button
            variant="roundedOutline"
            className="  h-[56px] border border-app-primary font-medium text-[20px]  rounded-[32px]"
          >
            Setting <Icon name={'Setting'} size={20} className="!w-[24px] !h-[24px]" />
          </Button>
          <Button
            variant="roundedOutline"
            className="  h-[56px] border border-app-primary font-medium text-[20px]  rounded-[32px]"
          >
            Sort By <Icon name={'ArrowDown'} size={20} className="!w-[24px] !h-[24px]" />
          </Button>
          <Button
            variant="roundedOutline"
            className="  h-[56px] border border-app-primary bg-primary text-white font-medium text-[20px] rounded-[32px]"
          >
            List view <Icon name={'ListView'} size={20} className="!w-[24px] !h-[24px]" />
          </Button>
        </div>
      </div>
      {type === 'table' ? <ReportTable tableData={sampleTableData} /> : <ChartGrid />}
    </div>
  )
}

export default Analytics
