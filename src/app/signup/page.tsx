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
  // [...auth]
  return (
    <div className="min-h-screen bg-app-primary text-white flex items-center justify-center p-4 lg:p-10 font-sans relative overflow-hidden">
      {/* Background/Layout Container */}
      <div className="container  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side: Branding & Info */}
        <Discription {...descriptionData} />

        {/* Right Side: Signup Form */}
        <div className="w-full max-w-xl mx-auto lg:ml-auto">
          <SignupForm />
        </div>
      </div>

      {/* Decorative chart fade effect if needed
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1F2937] to-transparent pointer-events-none lg:hidden"></div> */}
    </div>
  )
}
