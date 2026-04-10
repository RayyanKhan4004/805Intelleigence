import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { Checkbox } from '@/components/UI/checkbox'
import { Input } from '@/components/UI/input'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import { BigToolbar, Toolbar } from '@/shared/icons'
import Image from 'next/image'
import React from 'react'

function CreateCompaignPopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Create Campaign"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Campaign Name</div>
            <Input placeholder="The campaign name is for internal use only, your contacts won't see this." />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Email Subject</div>
            <Input placeholder="E.g. Your Weekly Market Report." />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">From</div>
            <Input placeholder="Use something recognizable, like your or your company's name" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">From Email</div>
            <Input placeholder="Your email will appear to have been sent by this address." />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Start Date</div>
            <Input placeholder="The date you want your campaign to begin.." />
          </div>
          <div className="flex flex-col gap-[15px] w-full">
            <div className="flex items-center justify-between">
              <label htmlFor="endDate" className="text-[20px]  text-app-primary">
                End Date
              </label>

              <div className="flex items-center gap-2">
                <Checkbox id="dont-end" className="w-5 h-5 rounded-[4px] border-app-greyText" />
                <label htmlFor="dont-end" className="text-[20px] text-app-primary cursor-pointer">
                  Don’t end
                </label>
              </div>
            </div>

            <Input placeholder="The date you want your campaign to end." />
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px]  text-app-primary">Frequency</div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="How often to send email." />
              </SelectTrigger>
            </Select>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="flexflex-col gap-[5px]">
              <div className="text-[20px]  text-app-primary">Email Content</div>
              <div>
                {' '}
                <Image src={Toolbar} alt="Toolbar" />
              </div>
              <div className="text-[14px] text-app-greyText">
                {
                  'Customize below. If you do not include the merge variable {{ButtonsLocation}}, the report link button will be automatically added to your email.'
                }
              </div>
            </div>
            <div className="border border-app-stroke rounded-[16px]">
              <div>
                <Image src={BigToolbar} alt="Big Toolbar" />
              </div>
              <Input
                placeholder="Type and paste your content here!"
                className="text-[14px] text-app-greyText w-[1109px] h-[160px] border-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="include-signature"
              className="w-5 h-5 rounded-[4px] border-app-greyText"
            />
            <label
              htmlFor="include-signature"
              className="text-[20px] text-app-primary cursor-pointer"
            >
              Include default signature box
            </label>
          </div>
          <div className="flex justify-end gap-[10px] mt-[30px]">
            <Button className="text-[16px] font-medium text-app-primary" variant="outline">
              Cancel
            </Button>
            <Button>Create</Button>
          </div>
        </div>
      </CustomPopup>
    </div>
  )
}

export default CreateCompaignPopUp
