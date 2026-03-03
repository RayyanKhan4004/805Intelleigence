
import { Button } from '@/components/UI/button'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import React from 'react'

function SearchBox() {
     const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <div className='flex flex-col gap-[15px] mb-[20px]'>
      <div className='text-[20px] text-app-primary'>Link</div>
       <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="https://805intelligence.re/17frdfg4ffg" />
              </SelectTrigger>
            </Select>
            </div>
            </div>
            <div className='flex justify-end gap-[10px]'>
           <Button variant="outline" className='font-medium text-[16px] text-app-primary border border-app-primary'>Goto</Button>
           <Button className='text-white text-[16px] font-medium'>Copy Link</Button>
            </div>
            <div className='flex flex-col gap-[15px] mb-[40px] mt-[20px]'>
            <div className='text-[18px] text-app-primary '>Show Embed Code</div>
            <div className='text-[14px] text-app-greyText pt-[21px] pb-[58px] pl-[20px] pr-[63px] border border-app-stroke rounded-[16px]'>
                {'<iframe src="https://altos.re/keep-informed?a=5628&embed=1&s=md" style="border:0;display:block;width:480px;max-width:100%;height:640px" scrolling="auto" loading="lazy"></iframe>'}
            </div>
            </div>
            <Button variant='outline' className='font-medium text-app-primary text-[16px]'>Close</Button>
    </div>
  )
}

export default SearchBox
