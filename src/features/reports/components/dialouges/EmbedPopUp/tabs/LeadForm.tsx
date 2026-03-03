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
    <div>
      <div>Select Campaign</div>
      <div>
        <Select>
          <SelectTrigger className="w-full h-[60px]">
            <SelectValue placeholder="Please Select a Campaign " />
          </SelectTrigger>
        </Select>
      </div>
      <div>Select Reports</div>
      <div>
        <Select>
          <SelectTrigger className="w-full h-[60px]">
            <SelectValue placeholder="Search & Select Reports " />
          </SelectTrigger>
        </Select>
      </div>
      <div className="flex items-center gap-[12px] ">
        <Checkbox className="border border-app-greyText" />
        <Label className="text-app-greyText text-[14px]">Add Custom Branding</Label>
      </div>

      <div className="flex items-center gap-[15px]">
        <Button>Download QR code (PNG)</Button>
        <div className="border border-app-primary rounded-[12px] text-app-greyText py-[17px] px-[27px]">
          https://altos.re/keep-informed?a=5628
        </div>
        <Button>Copy Link</Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="font-medium text-[20px] text-app-primary">Embed Code Options</div>
        <Button variant="outline">Copy Link</Button>
      </div>
      <div className="border-b border-app-stroke pb-2.5"></div>
      <div className="text-[18px] text-app-primary">Select Embed Size</div>

      <div>
        <RadioGroup className="flex items-center gap-[57px]">
          <div>
            <RadioGroupItem value="small" id="small" />
            <Label>Small</Label>
          </div>

          <div>
            <RadioGroupItem value="medium" id="medium" />
            <Label>Medium</Label>
          </div>

          <div>
            <RadioGroupItem value="large" id="large" />
            <Label>Large</Label>
          </div>

          <div>
            <RadioGroupItem value="xl" id="xl" />
            <Label>XL</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <div className="text-[18px] text-app-primary">Generated Embed Code</div>
        <div className="border border-app-stroke text-[14px] text-app-greyText pt-[21px] pb-[58px] pl-[20px]">
          {
            '<iframe src="https://altos.re/keep-informed?a=5628&embed=1&s=md" style="border:0;display:block;width:480px;max-width:100%;height:640px" scrolling="auto" loading="lazy"></iframe>'
          }
        </div>
      </div>

      <Button variant="outline" className="font-medium text-app-primary text-[16px]">
        Cancel
      </Button>
    </div>
  )
}

export default LeadForm
