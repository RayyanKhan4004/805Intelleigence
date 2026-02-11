import Discription from '@/features/auth/components/Discription'
import SignupForm from '@/features/auth/components/SignupForm'
import React from 'react'

export default function SignupPage() {
  const descriptionData = {
    title: '805',
    subTitle: {
      header: 'Start your <br /> <span style="color: #00BFA5;">market journey</span>',
      p: 'Join thousands of real estate professionals using 805Intelligence to stay ahead of market trends.',
    },
    listItems: [
      'Real time market analytics & insights',
      'Comprehensive 805 area coverage',
      'Historical trends & forecasting',
      'Custom branded reports',
    ],
  }
  return (
    <div className="min-h-screen bg-app-primary text-white flex  justify-between p-[60px] overflow-hidden ">
      {/* Background/Layout Container */}
      <div className="w-full flex lg:flex-row flex-col  gap-[60px] ">
        {/* Left Side: Branding & Info */}
        <Discription {...descriptionData} />

        {/* Right Side: Signup Form */}
        {/* <div className="w-full max-w-xl mx-auto lg:ml-auto"> */}
        <SignupForm />
        {/* </div> */}
      </div>
    </div>
  )
}
