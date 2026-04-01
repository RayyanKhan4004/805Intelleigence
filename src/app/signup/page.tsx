import Discription from '@/features/auth/components/Discription'
import SignupForm from '@/features/auth/components/SignupForm'
import React, { Suspense } from 'react'

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
    <div className="min-h-screen bg-app-primary text-white lg:flex justify-between p-[60px] max-sm:p-[20px]">
      <div className="w-full flex lg:flex-row flex-col gap-[60px]">
        <Discription {...descriptionData} />
        <Suspense fallback={null}>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  )
}
