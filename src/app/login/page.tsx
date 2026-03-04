import { Discription, LoginForm } from '@/features/auth'

export default function LoginPage() {
  const descriptionData = {
    title: '805',
    subTitle: {
      header: 'Lead with data.<br /> Win with <span style="color: #00BFA5;">Confidence</span>.',
      p: 'Access Realtime marketing intelligence for the 805 area. Make informed decisions with comprehensive analytics and insights.',
    },
  }

  return (
    <div className="min-h-screen bg-app-primary text-white flex  justify-between p-[60px] overflow-hidden  max-sm:p-[20px]">
      <div className="w-full flex lg:flex-row flex-col  gap-[60px] ">
        <Discription {...descriptionData} />
        <LoginForm />
      </div>
    </div>
  )
}
