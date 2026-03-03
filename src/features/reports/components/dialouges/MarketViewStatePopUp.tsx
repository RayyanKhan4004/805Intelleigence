import CustomPopup from '@/components/theme/CustomPopUp'
import React from 'react'

function MarketViewStatePopUp() {
        const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
       <CustomPopup
        title="Market View Status"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        hj
      </CustomPopup>
    </div>
  )
}

export default MarketViewStatePopUp
