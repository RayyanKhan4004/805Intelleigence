import Layout from '@/components/theme/Layout'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import { BigToolbar } from '@/shared/icons'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <Layout settings={{ navbar: true }}>
      <div className=" flex flex-col rounded-[20px] shadow-shadow p-5 px-[30px]">
        <div className="font-semibold text-[25px] text-app-primary">Submit Request</div>
        <div className="border-b border-app-stroke  pb-[30px]"></div>

        <div className="flex flex-col gap-[20px] mt-[30px]">
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
              <Label htmlFor="Account" className="text-[20px]  text-app-primary">
                Account ID # (Optional )
              </Label>
              <Input className="h-[60px]" id="phone" placeholder="xxxxxx" name="Account" />
            </div>
          </div>

          <div className="flex items-center gap-[10px] justify-between">
            <div className="w-full flex flex-col gap-[15px]">
              <Label htmlFor="id" className="text-[20px]  text-app-primary">
                I'd like to discuss:
              </Label>
              <Input className="h-[60px]" id="id" placeholder="Please select" name="iddiscuss" />
            </div>
            <div className="w-full flex flex-col gap-[15px]">
              <Label htmlFor="phone" className="text-[20px]  text-app-primary">
                Phone Number
              </Label>
              <Input className="h-[60px]" id="phone" placeholder="(---) --- -----" name="phone" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div className="text-[20px]  text-app-primary">Subject</div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Add Subject" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="text-[20px] text-app-primary">Description</div>
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

        <div>
          <div className=" text-[20px] text-app-primary"> Attachment (optional)</div>
          <div className="border-2 border-dashed border-app-primary rounded-[15px] w-[526px] h-[131px] flex flex-col items-center justify-center  cursor-pointer">
            <span className="font-medium text-[22px] text-app-primary">
              Upload{' '}
              <span className="font-medium text-[22px] text-app-greyText">or Drop File Here </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[10px] mt-[30px]">
        <Button className="text-[16px] font-medium text-app-primary" variant="outline">
          Cancel
        </Button>
        <Button>Submit </Button>
      </div>
    </Layout>
  )
}

export default page
