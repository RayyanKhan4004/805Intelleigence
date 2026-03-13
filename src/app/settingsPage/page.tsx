'use client'
import Layout from '@/components/theme/Layout'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Checkbox } from '@/components/UI/checkbox'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import Header from '@/features/settingsp/components/Header'
import { PersonImage } from '@/shared/icons'
import Image from 'next/image'
import React from 'react'

function page() {
  const [selectedTab, setSelectedTab] = React.useState<'profile' | 'Notifications' | 'Payments'>(
    'profile'
  )
  const tabs: Array<{ label: string; value: 'profile' | 'Notifications' | 'Payments' }> = [
    {
      label: 'Profile',
      value: 'profile',
    },
    {
      label: 'Notifications',
      value: 'Notifications',
    },
    {
      label: 'Payments',
      value: 'Payments',
    },
  ]
  return (
    <Layout settings={{ navbar: true }}>
      <div>
        <div className="flex gap-[15px] justify-between">
          {tabs.map(curr => {
            return (
              <Button
                className=" px-[16px] py-[8px] text-[20px] "
                onClick={() => setSelectedTab(curr.value)}
                key={curr.value}
                variant={selectedTab === curr.value ? 'rounded' : 'roundedOutline'}
              >
                {curr.label}
              </Button>
            )
          })}
        </div>

        {selectedTab === 'profile' && (
          <>
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
                    <Input
                      className="h-[60px]"
                      id="phone"
                      placeholder="e.g.  805 "
                      name="company"
                    />
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
          </>
        )}

        {selectedTab === 'Notifications' && (
          <>
            <Header />
            <div className=" flex flex-col rounded-[20px] shadow-shadow p-5 px-[30px]">
              <div className="font-semibold text-[25px] text-app-primary">Edit profile</div>

              <div className="flex flex-col gap-[40px]">
                <div className="w-full flex flex-col gap-[15px]">
                  <div className="border-b border-app-stroke  pb-[30px]"></div>
                  <Label htmlFor="send" className="text-[20px]  text-app-primary">
                    Send to:
                  </Label>
                  <Input
                    className="h-[60px]"
                    id="email"
                    placeholder="Enter Email Address"
                    name="email"
                  />
                  <div className="grid grid-cols-3  items-center gap-[12px] h-full">
                    <div className="flex items-center gap-[12px] ">
                      <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                      <Label className="text-app-primary text-[20px] text-nowrap">
                        Send new lead notifications
                      </Label>
                    </div>

                    <div className="flex items-center gap-[12px] ">
                      <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                      <Label className="text-app-primary text-[20px] text-nowrap">
                        Send weekly activity report
                      </Label>
                    </div>

                    <div className="flex items-center gap-[12px] ">
                      <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                      <Label className="text-app-primary text-[20px] text-nowrap">
                        Notify on email open
                      </Label>
                    </div>
                    <div className="flex items-center gap-[12px] ">
                      <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                      <Label className="text-app-primary text-[20px] text-nowrap">
                        Notify on email report link click
                      </Label>
                    </div>
                    <div className="flex items-center gap-[12px] ">
                      <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                      <Label className="text-app-primary text-[20px] text-nowrap">
                        Notify on report change
                      </Label>
                    </div>
                  </div>
                </div>
                <div>
                  <Typography variant="h9" className="font-semibold text-app-primary text-[25px]">
                    SMS Notifications
                  </Typography>
                  <div className="text-=[14px] text-app-greyText">
                    Send notifications via SMS. Additional carrier charges may applyfor text
                    messages, check with your mobile service provider for details
                  </div>
                  <div className="border-b border-app-stroke  pb-[30px]"></div>
                  <div>
                    <div className="flex flex-col gap-[15px] mb-[20px]">
                      <Label htmlFor="send" className="text-[20px]  text-app-primary">
                        Send to:
                      </Label>
                      <div className="flex items-center gap-[15px]">
                        <div>
                          <Input
                            className="h-[60px] w-[117px]"
                            id="number"
                            placeholder="+1"
                            name="number"
                          />
                        </div>
                        <div>
                          <Input
                            className="h-[60px] w-[1183px]"
                            id="digit"
                            placeholder="Enter 10 Digit number"
                            name="digit"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3  items-center gap-[12px] h-full">
                      <div className="flex items-center gap-[12px] ">
                        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                        <Label className="text-app-primary text-[20px] text-nowrap">
                          Notify on email open
                        </Label>
                      </div>

                      <div className="flex items-center gap-[12px] ">
                        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                        <Label className="text-app-primary text-[20px] text-nowrap">
                          Notify on email report link click
                        </Label>
                      </div>

                      <div className="flex items-center gap-[12px] ">
                        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                        <Label className="text-app-primary text-[20px] text-nowrap">
                          Notify on new lead
                        </Label>
                      </div>
                      <div className="flex items-center gap-[12px] ">
                        <Checkbox className="border border-app-greyText w-[25px] h-[25px]" />
                        <Label className="text-app-primary text-[20px] text-nowrap">
                          Notify on report change
                        </Label>
                      </div>
                    </div>

                    <div className="flex justify-end gap-[10px] mt-[30px]">
                      <Button
                        className="text-[16px] font-medium text-app-primary"
                        variant="outline"
                      >
                        Cancel
                      </Button>
                      <Button>Save </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default page
