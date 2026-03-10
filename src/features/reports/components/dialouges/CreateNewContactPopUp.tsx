import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { Checkbox } from '@/components/UI/checkbox'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Radio } from 'lucide-react'
import React from 'react'

function CreateNewContactPopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Create a New Contact "
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
       
          footer={
                  <div className="flex justify-end gap-[10px] mt-[30px]">
            <Button className="text-[16px] font-medium text-app-primary" variant="outline">
              Cancel
            </Button>
            <Button>Save </Button>
          </div>
                }
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px] justify-between">
            <div className="w-full flex flex-col gap-[15px]">
              <Label htmlFor="firstName" className="text-[20px]  text-app-primary">
                First Name
              </Label>
              <Input
                className="h-[60px]"
                id="firstName"
                placeholder="e.g. John"
                name="first_name"
              />
            </div>
            <div className="w-full flex flex-col gap-[15px]">
              <Label htmlFor="firstName" className="text-[20px]  text-app-primary">
                Last Name
              </Label>
              <Input
                className="h-[60px]"
                id="lastName"
                placeholder="e.g. Franklin"
                name="last_name"
              />
            </div>
          </div>

          <div className="flex items-center gap-[10px] justify-between">
            <div className="w-full flex flex-col gap-[15px]">
              <Label htmlFor="email" className="text-[20px]  text-app-primary">
                Email Address
              </Label>
              <Input
                className="h-[60px]"
                id="email"
                placeholder="e.g. abcd@gmail.com"
                name="email"
              />
            </div>
            <div className="w-full flex flex-col gap-[15px]">
              <Label htmlFor="phone" className="text-[20px]  text-app-primary">
                Phone Number
              </Label>
              <Input className="h-[60px]" id="phone" placeholder="(---) --- -----" name="phone" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Select Type</div>
            <div>
              <Select>
                <SelectTrigger className="w-full h-[60px]">
                  <SelectValue placeholder="Please Select the type" />
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Location (Subscribed)</div>
            <div>
              <Select>
                <SelectTrigger className="w-full h-[60px]">
                  <SelectValue placeholder="Filter by City and Zio to add" />
                </SelectTrigger>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Preference</div>
            <div>
              <RadioGroup defaultValue="single-family" className="flex gap-4 ">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="single-family" id="single-family" />
                  <Label htmlFor="single-family" className="text-[14px] text-app-greyText">
                    Single-Family Homes
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem value="condos" id="condos" />
                  <Label htmlFor="condos" className="text-[14px] text-app-greyText">
                    Condos
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem value="co-op" id="co-op" />
                  <Label htmlFor="co-op" className="text-[14px] text-app-greyText">
                    Co-Op
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>





  <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Campaigns</div>
            <div>
              <RadioGroup defaultValue="single-family" className="flex flex-col gap-4 ">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="previous-buyer-client" id="previous-buyer-client" />
                  <Label htmlFor="previous-buyer-client" className="text-[14px] text-app-greyText">
                    Previous Buyer Client Campaign
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem value="sellers" id="sellers" />
                  <Label htmlFor="sellers" className="text-[14px] text-app-greyText">
                    Sellers Campaign
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem value="buyers" id="buyers" />
                  <Label htmlFor="buyers" className="text-[14px] text-app-greyText">
                    Buyer Campaign
                  </Label>
                </div>

                
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="new-client" id="new-client" />
                  <Label htmlFor="new-client" className="text-[14px] text-app-greyText">
                    New Client Default Campaign
                  </Label>
                </div>
                
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="do-not-email" id="do-not-email" />
                  <Label htmlFor="do-not-email" className="text-[14px] text-app-greyText">
                    Don't send email campaigns to this contact
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

         <div className="flex items-center gap-5 h-full">
                      <div className="flex items-center gap-[12px] ">
                        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                        <Label className="text-app-primary text-[20px]">Send Report(s) Now?</Label>
                      </div>
        
                      <div className="flex items-center gap-[12px] ">
                        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                        <Label className="text-app-primary text-[20px]">Opt-out of Email?</Label>
                      </div>
                    </div>


          
        </div>
      </CustomPopup>
    </div>
  )
}

export default CreateNewContactPopUp
