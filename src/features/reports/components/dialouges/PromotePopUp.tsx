import CustomPopup from '@/components/theme/CustomPopUp'
import { BudgetSlider } from '@/components/UI/BudgetSlider'
import { Button } from '@/components/UI/button'
import React from 'react'

function PromotePopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Promote Your Report"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="font-medium text-[14px] text-app-greyText">
          Altos will promote your LOS ANGELES COUNTY, CA report using Facebook ads to generate buyer
          and seller leads by: Writing the ad copy based on current market conditions Selecting the
          best performing images Placing the ad with our optimized targeting algorithms Enter your
          desired budget and we'll give you an estimate of how many leads you'll generate. Ads will
          run for one week.
        </div>

        <div className="font-bold text-[20px] text-app-primary">Budget</div>
        <BudgetSlider />
        <div className="font-medium text-[14px] text-app-greyText">
          Estimated 6-10 leads* Altos will charge $100 to the credit card on your account.
        </div>
        <div className="w-full flex justify-end">
          <Button>Promote Now</Button>
        </div>
      </CustomPopup>
    </div>
  )
}

export default PromotePopUp
