import Layout from '@/components/theme/Layout'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import Header from '@/features/settingsp/components/Header'
import { PersonImage } from '@/shared/icons'
import Image from 'next/image'

function page() {
  return (
    <Layout settings={{ navbar: true }}>
      <div>
        <Header />
        <div className=" flex flex-col rounded-[20px] shadow-shadow p-5 px-[30px]">
          <div className="font-semibold text-[25px] text-app-primary">Edit profile</div>
          <div className="border-b border-app-stroke  pb-[30px]"></div>
          <div className="mt-[30px]">
            <Image src={PersonImage} alt="PersonImage" />
          </div>
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
                  placeholder="e.g. abcdef@gmail.com"
                  name="email"
                />
              </div>
              <div className="w-full flex flex-col gap-[15px]">
                <Label htmlFor="company" className="text-[20px]  text-app-primary">
                  Company
                </Label>
                <Input className="h-[60px]" id="phone" placeholder="e.g.  805 " name="company" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-[25px] text-app-primary">Change Password</div>
              <div className="border-b border-app-stroke  pb-[30px]"></div>
            </div>
            <div className="flex items-center gap-[10px] justify-between">
              <div className="w-full flex flex-col gap-[15px]">
                <Label htmlFor="password" className="text-[20px]  text-app-primary">
                  Current Password
                </Label>
                <Input className="h-[60px]" id="pass" placeholder="********" name="pass" />
              </div>
              <div className="w-full flex flex-col gap-[15px]">
                <Label htmlFor="cpass" className="text-[20px]  text-app-primary">
                  Confirm Password
                </Label>
                <Input className="h-[60px]" id="cpass" placeholder="******** " name="cpass" />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-[10px] mt-[30px]">
            <Button className="text-[16px] font-medium text-app-primary" variant="outline">
              Cancel
            </Button>
            <Button>Save </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default page
