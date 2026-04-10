import CustomPopup from '@/components/theme/CustomPopUp'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import React from 'react'
import AddNewUserTable from './AddNewUser/components/AddNewUserTable'
import { Checkbox } from '@/components/UI/checkbox'
import { Button } from '@/components/UI/button'

function AddNewUserPopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <CustomPopup
        title="Create a New User"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px] justify-between">
            <div className="w-full flex flex-col gap-[15px]">
              <div className="text-[20px] text-app-primary">First Name</div>
              <Input
                className="h-[60px]"
                id="firstName"
                placeholder="e.g. John"
                name="first_name"
              />
            </div>
            <div className="w-full flex flex-col gap-[15px]">
              <div className="text-[20px] text-app-primary">Last Name</div>
              <Input
                className="h-[60px]"
                id="lastName"
                placeholder="e.g. Franklin"
                name="last_name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Email Address</div>
            <Input placeholder="e.g. abcdef@gmail.com" />
          </div>
          <div>
            <AddNewUserTable />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[12px]">
                <Checkbox
                  id="include-signature"
                  className="w-5 h-5 rounded-[4px] border-app-greyText"
                />
                <label
                  htmlFor="include-signature"
                  className="text-[20px] text-app-primary cursor-pointer"
                >
                  Portfolio Administrator
                </label>
              </div>
              <div className="text-[14px] text-app-greyText">
                A user that is a Portfolio Administrator will be allowed to add and remove users,
                accounts, and payment methods.
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[12px]">
                <Checkbox
                  id="include-signature"
                  className="w-5 h-5 rounded-[4px] border-app-greyText"
                />
                <label
                  htmlFor="include-signature"
                  className="text-[20px] text-app-primary cursor-pointer"
                >
                  Enable Creation/Password Change Email
                </label>
              </div>
              <div className="text-[14px] text-app-greyText">
                Once saved, this user will automatically receive an email with password setup and
                login instructions.
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-[10px] mt-[30px]">
            <Button className="text-[16px] font-medium text-app-primary" variant="outline">
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </div>
      </CustomPopup>
    </div>
  )
}

export default AddNewUserPopUp
