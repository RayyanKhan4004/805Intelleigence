import React from 'react'
import Header from '@/features/settingsp/components/Header'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import { Checkbox } from '@/components/UI/checkbox'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
function Notifications() {
  return (
    <div>
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
    </div>
  )
}

export default Notifications
