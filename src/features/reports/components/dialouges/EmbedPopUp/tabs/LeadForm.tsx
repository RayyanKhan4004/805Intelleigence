import { Button } from '@/components/UI/button'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/UI/select'

import { Checkbox } from '@/components/UI/checkbox'
import { Label } from '@/components/UI/label'
import { RadioGroup, RadioGroupItem } from '@/components/UI/radio-group'

function LeadForm() {
  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex flex-col gap-[20px]'>
      <div className='text-[20px] text-app-primary'>Select Campaign</div>
      <div>
        <Select>
          <SelectTrigger className="w-full h-[60px]">
            <SelectValue placeholder="Please Select a Campaign " />
          </SelectTrigger>
        </Select>
      </div>
      </div>
         <div className='flex flex-col gap-[20px]' >
      <div className='text-[20px] text-app-primary'>Select Reports</div>
      <div>
        <Select>
          <SelectTrigger className="w-full h-[60px]">
            <SelectValue placeholder="Search & Select Reports " />
          </SelectTrigger>
        </Select>
      </div>
      </div>

       <div className='flex flex-col gap-[20px]'>
      <div className="flex items-center gap-[12px] ">
        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
        <Label className='text-[20px] text-app-primary'>Add Custom Branding</Label>
      </div>

      <div className="flex items-center gap-[15px]">
        <Button>Download QR code (PNG)</Button>
        <div className="border border-app-primary rounded-[12px] text-app-greyText py-[17px] px-[27px]">
          https://altos.re/keep-informed?a=5628
        </div>
        <Button>Copy Link</Button>
      </div>
      </div>
   </div>
       <div className=" w-full  rounded-[20px] shadow-shadow p-5">
      <div className="flex items-center justify-between ">
        <div className="font-medium text-[20px] text-app-primary">Embed Code Options</div>
        <Button variant="outline">Copy Link</Button>
      </div>
      <div className="border-b border-app-stroke pb-2.5 mb-[20px]"></div>
     

     <div className='flex flex-col gap-[25px]'>
      <div className='flex flex-col gap-[20px]'>
      <div className="text-[18px] text-app-primary">Select Embed Size</div>

      <div>
        <RadioGroup className="flex items-center gap-[57px]">
          <div className="flex items-center gap-[15px]">
            <RadioGroupItem value="small" id="small" />
            <Label className='text-[14px] text-app-greyText'>Small</Label>
          </div>

          <div className="flex items-center gap-[15px]">
            <RadioGroupItem value="medium" id="medium" />
            <Label className='text-[14px] text-app-greyText'>Medium</Label>
          </div>

          <div className="flex items-center gap-[15px]">
            <RadioGroupItem  value="large" id="large" />
            <Label className='text-[14px] text-app-greyText'>Large</Label>
          </div>

          <div className="flex items-center gap-[15px]">
            <RadioGroupItem value="xl" id="xl" />
            <Label className='text-[14px] text-app-greyText'>XL</Label>
          </div>
        </RadioGroup>
      </div>
      </div>

      <div className='flex flex-col gap-[15px]'>
        <div className="text-[18px] text-app-primary">Generated Embed Code</div>
        <div className="border border-app-stroke rounded-[16px] text-[14px] text-app-greyText pt-[21px] pb-[58px] pl-[20px]">
          {
            '<iframe src="https://altos.re/keep-informed?a=5628&embed=1&s=md" style="border:0;display:block;width:480px;max-width:100%;height:640px" scrolling="auto" loading="lazy"></iframe>'
          }
        </div>
        </div>
        </div>
      </div>

      <Button variant="outline" className="font-medium text-app-primary text-[16px] justify-start w-fit">
        Cancel
      </Button>
    </div>
  )
}

export default LeadForm
