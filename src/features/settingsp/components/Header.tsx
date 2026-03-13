import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { Icon } from '@/shared/icons/Icon'
import React from 'react'

function Header() {
  return (
    <div className="p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
      <div className="flex gap-[30px] flex-col ">
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <Typography
              variant="PageHeading"
              className="font-semibold text-app-primary text-[30px]"
            >
              Settings
            </Typography>
            <Typography variant="TableTextSize" className="text-app-black text-[14px]">
              Real time insights for 805 areas
            </Typography>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button
              variant="roundedOutline"
              className="  h-[56px] border border-app-primary bg-primary text-white font-medium text-[20px] rounded-[32px]"
            >
              <Icon name={'Person'} size={20} className="!w-[24px] !h-[24px]" /> Profile
            </Button>
            <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
              <Typography
                variant="PageSecondText"
                className="text-app-primary font-medium border-app-primary rounded-[12px] flex items-center"
              >
                <Icon name="Notification" className="!w-6 !h-6" />
                Notifications
              </Typography>
            </Button>
            <Button variant="roundedOutline" className="p-4 w-[162px] h-[56px] flex items-center">
              {' '}
              <Icon name="Payment" className="!w-6 !h-6" /> Payments
            </Button>

            <Input
              preIcon={<Icon name="Setting" className="!w-6 !h-6" />}
              className="w-[237px] h-[56px] text-app-primary placeholder:text-app-greyText rounded-[32px] border-app-primary "
              placeholder="Advance setting"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
