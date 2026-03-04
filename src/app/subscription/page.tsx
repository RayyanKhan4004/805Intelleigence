'use client'
import Layout from '@/components/theme/Layout'
import { HeroComponent, ListCard, SubscriptionTable } from '@/features/subscription'
function subscriptionpage() {
  return (
    <Layout
      settings={{ navbar: true, footer: true, padding: 60 }}
      heroComponent={<HeroComponent />}
    >
      <div className=" max-sm:p-[15px] max:md:p-[32px] mt-[33px]">
        <ListCard />
      </div>
      <SubscriptionTable />
    </Layout>
  )
}
export default subscriptionpage
