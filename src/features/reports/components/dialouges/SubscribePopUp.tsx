import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { ContinueWithFacebook } from '@/shared/icons'
import Image from 'next/image'
import React from 'react'

function SubscribePopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Explore the market anywhere in the US"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
         footer={
          <div className="flex items-center gap-[10px]">
            <Button className="text-[16px] font-medium text-app-primary " variant="outline">
              Cancel
            </Button>
            <Button>Register</Button>
          </div>
        }
      >
        <div className='px-[20px] flex flex-col gap-[20px]'>
        <div className="text-[16px] text-app-greyText">
          Subscribe to the Kern County, CA Market Report. Get access to search any other city or zip
          across the US.
        </div>
        <div className="flex flex-col items-center">
          <Image src={ContinueWithFacebook} alt="Continue with Facebook" />
        </div>
        <div className="font-bold text-[16px] text-app-greyText flex flex-col items-center">OR</div>
        <div className="flex flex-col gap-[20px] w-[full]">
          <div className="flex items-center gap-[10px] justify-between">
            <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full">
              First Name
            </div>
            <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full">
              Last Name
            </div>
          </div>

          <div className="flex items-center gap-[10px] justify-between">
            <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full">
              Email Address
            </div>
            <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full text-nowrap">
              Phone number
            </div>
          </div>
        <div className='text-[16px] text-app-greyText'>By submitting this form, I understand I may be contacted by Market Update with 805title in the future with related real estate information.</div>
        </div>
        </div>
      </CustomPopup>
    </div>
  )
}

export default SubscribePopUp
