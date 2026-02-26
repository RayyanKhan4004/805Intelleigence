import CustomPopup from '@/components/theme/CustomPopUp'



import React from 'react'
import Analytics from '../Analytics'
import PopTable from '../PopTable'




export function ViewPopUp() {
     const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
     
          <CustomPopup
        title="ORANGE COUNTY, CA"
        Description="Tue, Dec, 09, 2025"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
       <PopTable/>

      </CustomPopup>
    </div>
  )
}

export default ViewPopUp
