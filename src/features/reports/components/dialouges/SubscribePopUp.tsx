import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { ContinueWithFacebook } from '@/shared/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { suscribePopUpSchema } from '../schema/suscribePopUp.schema'
import { suscribePopUpTypes } from '../../types'

function SubscribePopUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<suscribePopUpTypes>({
    resolver: yupResolver(suscribePopUpSchema) as any,
  })

  const [isOpen, setIsOpen] = React.useState(true)
  function onFormSubmit() {
    console.log('submited')
  }
  return (
    <div>
      <CustomPopup
        title="Explore the market anywhere in the US"
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex items-center gap-[10px]">
            <Button className="text-[16px] font-medium text-app-primary " variant="outline">
              Cancel
            </Button>
            <Button form="subscribePopUp-form" type="submit">
              Register
            </Button>
          </div>
        }
      >
        <div className="px-[20px] flex flex-col gap-[20px]">
          <div className="text-[16px] text-app-greyText">
            Subscribe to the Kern County, CA Market Report. Get access to search any other city or
            zip across the US.
          </div>
          <div className="flex flex-col items-center">
            <Image src={ContinueWithFacebook} alt="Continue with Facebook" />
          </div>
          <div className="font-bold text-[16px] text-app-greyText flex flex-col items-center">
            OR
          </div>
          <form
            id="subscribePopUp-form"
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col gap-[20px] w-[full]"
          >
            <div className="flex items-center gap-[10px] justify-between">
              <div className="w-full">
                <Input
                  className="h-[60px]"
                  {...register('firstName')}
                  id="firstName"
                  placeholder="e.g. John"
                  name="first_name"
                />
                <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
              </div>
              <div className="w-full">
                <Input
                  className="h-[60px]"
                  {...register('lastName')}
                  id="lastName"
                  placeholder="e.g. Franklin"
                  name="last_name"
                />
                <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
              </div>

              {/* <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full">
              First Name
            </div> */}
              {/* <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full">
              Last Name
            </div> */}
            </div>

            <div className="flex items-center gap-[10px] justify-between">
              <div className="w-full">
                <Input
                  className="h-[60px]"
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="sergio123@example.com"
                  name="email"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>

              {/* <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full">
                Email Address
              </div> */}
              {/* <div className="text-[14px] text-app-greyText border border-app-stroke rounded-[16px]  pt-[20px] pb-[20px] pl-[20px] pr-[268px] w-full text-nowrap">
                Phone number
              </div> */}
              <div className="w-full">
                <Input
                  className="h-[60px]"
                  {...register('phoneNumber')}
                  id="phoneNumber"
                  type="number"
                  placeholder="Phone number"
                  name="phoneNumber"
                />
                <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
              </div>
            </div>
            <div className="text-[16px] text-app-greyText">
              By submitting this form, I understand I may be contacted by Market Update with
              805title in the future with related real estate information.
            </div>
          </form>
        </div>
      </CustomPopup>
    </div>
  )
}

export default SubscribePopUp
