'use client'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { Icon } from '@/shared/icons/Icon'
import { useState } from 'react'
import { AddNewReport } from './dialouges'

function Header() {
  const [popUp , setPopup] = useState<undefined | 'report' | 'export'>(undefined)
  return (
    <div className="p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
      <div className="flex gap-[30px] flex-col ">
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <Typography
              variant="PageHeading"
              className="font-semibold text-app-primary text-[30px]"
            >
              Market Reports
            </Typography>
            <Typography variant="TableTextSize" className="text-app-black text-[14px]">
              Real time insights for 805 areas
            </Typography>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Input
              preIcon={<Icon name="Search" className="!w-6 !h-6" />}
              className="w-[237px] h-[56px] text-app-primary placeholder:text-app-greyText rounded-[12px] border-app-primary "
              placeholder=" Search by name" 
            />
            <Button variant="outline" className="p-4  h-[56px] border border-app-primary">
              <Typography
                variant="PageSecondText"
                className="text-app-primary font-medium border-app-primary rounded-[12px] flex items-center"
              >
                <Icon name="DownDown" className="!w-6 !h-6" />
                Export
              </Typography>
            </Button>
            <Button
              onClick={() => setPopup('report')}
              className="p-4 w-[162px] h-[56px] flex items-center"
            >
              {' '}
              <Icon name="Plus" className="!w-6 !h-6" /> Add Report
            </Button>
          </div>
        </div>
      </div>
      <AddNewReport isOpen={!!(popUp == 'report')} onClose={()=>{setPopup(undefined)}} />
    </div>
  )
}

export default Header
