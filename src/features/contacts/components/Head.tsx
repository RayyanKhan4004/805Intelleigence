'use client'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import UploadContactsPopUp from '@/features/reports/components/dialouges/UploadContactsPopUp'
import { Icon } from '@/shared/icons/Icon'
import React, { useState } from 'react'

function Head() {
  const [popup, setPopUp] = useState<'Upload' | undefined>(undefined)
  return (
    <div>
      <div className="p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
        <div className="flex gap-[30px] flex-col ">
          <div className="flex justify-between flex-wrap gap-4">
            <div>
              <Typography
                variant="PageHeading"
                className="font-semibold text-app-primary text-[30px]"
              >
                Contacts
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
              <Button
                onClick={() =>setPopUp('Upload')}
                variant="outline"
                className="p-4  h-[56px] border border-app-primary"
              >
                <Typography
                  variant="PageSecondText"
                  className="text-app-primary font-medium border-app-primary rounded-[12px] flex items-center"
                >
                  <Icon name="Up" className="!w-6 !h-6" />
                  Upload
                </Typography>
              </Button>
              <Button variant="outline" className="p-4  h-[56px] border border-app-primary">
                <Typography
                  variant="PageSecondText"
                  className="text-app-primary font-medium border-app-primary rounded-[12px] flex items-center"
                >
                  <Icon name="DownDown" className="!w-6 !h-6" />
                  Download
                </Typography>
              </Button>
              <Button className="p-4 w-[162px] h-[56px] flex items-center">
                {' '}
                <Icon name="Plus" className="!w-6 !h-6" /> ADD Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <UploadContactsPopUp onClose={() => setPopUp(undefined)} isOpen={popup == 'Upload'} />
    </div>
  )
}

export default Head
