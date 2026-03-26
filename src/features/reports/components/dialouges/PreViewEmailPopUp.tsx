import CustomPopup from '@/components/theme/CustomPopUp'

import Image from 'next/image'
import React from 'react'
import { Rectangle } from '@/shared/icons'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'

function PreViewEmailPopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Email Preview"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="bg-app-mutedBg w-[1105px] h-[241px]  items-center justify-center flex flex-col mb-[52px]">
          <div className="font-bold text-[52px] text-app-primary">805Intelleigence</div>
          <div className="text-[32px] text-app-greyText">Market Update with 805Intelleigence</div>
        </div>
        <div className="flex flex-col gap-[13px]">
          <p>
            <span className="font-bold text-[20px] text-app-primary">From:</span>
            <span className="text-[20px] text-app-greyText"> John Franklin</span>
          </p>
          <p>
            <span className="font-bold text-[20px] text-app-primary">Subject:</span>
            <span className="text-[20px] text-app-greyText">
              {' '}
              Here’s what’s happening in the real estate market
            </span>
          </p>
        </div>
        <p className="text-[20px] text-app-greyText pt-[40px] pb-[20px]">
          Hi Eleanor - here’s your quarterly market report.
        </p>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[20px] text-app-greyText">
            It's important to stay in touch with how the market is behaving. It's even more
            important once you've made that big investment. As your real estate expert I want to
            ensure you stay informed.
          </p>
          <p className="text-[20px] text-app-greyText">
            I hope all is well with you and your family. If you ever have any questions about the
            report, know of someone who has any real estate needs or have some of your own, please
            don’t hesitate to contact me.
          </p>
        </div>
        <div className="bg-app-primary w-[1105px] h-[241px]  items-center justify-center flex flex-col mt-[54px]">
          <div className="font-bold text-[52px] text-white">805Intelleigence</div>
          <div className="text-[22px] text-white">Presented by Galen Callahan</div>
        </div>
        <div className="flex justify-end  mt-[30px]">
          <Button className="text-[16px] font-medium text-app-primary" variant="outline">
            Create
          </Button>
        </div>
      </CustomPopup>
    </div>
  )
}

export default PreViewEmailPopUp
