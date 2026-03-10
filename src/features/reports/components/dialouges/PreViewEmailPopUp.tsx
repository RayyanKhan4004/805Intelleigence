import CustomPopup from '@/components/theme/CustomPopUp'

import Image from 'next/image'
import React from 'react'
import { Rectangle } from '@/shared/icons'

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
        <div>
            <div>
         <Image src={Rectangle} alt="Rectangle" width={1105} height={241}/>
         </div>
         <div className='font-bold text-[52px] text-app-primary'>805Intelleigence</div>
         <div className='text-[32px] text-app-greyText'>Market Update with 805Intelleigence</div>
        </div>
      </CustomPopup>
    </div>
  )
}

export default PreViewEmailPopUp
