import Discription from '@/features/auth/components/Discription'
import LoginForm from '@/features/auth/components/LoginForm'
import React from 'react'

export default function LoginPage() {
  const descriptionData = {
    title: '805',
    subTitle: {
      header: 'Lead with data.<br /> Win with <span style="color: #00BFA5;">Confidence</span>.',
      p: 'Access Realtime marketing intelligence for the 805 area. Make informed decisions with comprehensive analytics and insights.',
    },
  }

  return (
    <div className="min-h-screen bg-app-primary text-white flex  justify-between p-[60px] overflow-hidden ">
      {/* Background/Layout Container */}
      <div className="w-full flex lg:flex-row flex-col  gap-[60px] ">
        {/* Left Side: Branding & Info */}
        <Discription {...descriptionData} />

        {/* Right Side: Signup Form */}
        {/* <div className="w-full max-w-xl mx-auto lg:ml-auto"> */}
        <LoginForm />
        {/* </div> */}
      </div>
    </div>
  )
}
