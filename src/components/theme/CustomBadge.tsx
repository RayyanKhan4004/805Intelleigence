import { Icon } from '@/shared/icons/Icon'
import React from 'react'

function CustomBadge() {
  return (
    
              <div className='flex gap-[5px]'>
                <div className='flex gap-[5px] text-[12px] text-app-blackText rounded-[15px] bg-app-badge px-[12px] py-[6px] '>Median List Price <Icon name="OrangeX" className="w-[10px] h-[10] " /></div>
                <div className=' flex gap-[5px] text-[12px] text-app-blackText rounded-[15px] bg-app-badge px-[12px] py-[6px]'>Avg DOM <Icon name="OrangeX" className="w-[10px] h-[10] " /></div>
                <div className='flex gap-[5px] text-[12px] text-app-blackText rounded-[15px] bg-app-badge px-[12px] py-[6px]'>Market Action <Icon name="OrangeX" className="w-[10px] h-[10] " /></div>
              </div>
  )
}

export default CustomBadge
