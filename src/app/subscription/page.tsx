'use client'
import Layout from '@/components/theme/Layout'
import HeroComponent from '@/features/subscription/components/HeroComponent'
import ListCard from '@/features/subscription/components/ListCard'
import TableComponent from '@/features/subscription/components/SubscriptionTable'
function subscriptionpage() {
  return (
    <Layout
      settings={{ navbar: true, footer: true, padding: 60 }}
      heroComponent={<HeroComponent />}
    >
      <div className=" max-sm:p-[15px] max:md:p-[32px] mt-[33px]">
        <ListCard />
      </div>
      <TableComponent />
    </Layout>
  )
}
export default subscriptionpage
