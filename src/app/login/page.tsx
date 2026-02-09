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
    <div className="min-h-screen bg-app-primary text-white flex items-center justify-center p-4 lg:p-10 font-sans relative overflow-hidden">
      {/* Background/Layout Container */}
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side: Branding & Info */}
        <Discription {...descriptionData} />

        {/* Right Side: Login Form */}
        <div className="w-full max-w-xl mx-auto lg:ml-auto">
          <LoginForm />
        </div>
      </div>

      {/* Decorative chart fade effect if needed */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-app-primary to-transparent pointer-events-none lg:hidden"></div>
    </div>
  )
}
