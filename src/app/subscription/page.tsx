'use client'
import Footer from '@/features/Footer/components/Footer'
import Navbar from '@/features/navBar/components/Navbar'
import HeroComponent from '@/features/subscription/components/HeroComponent'
import ListCard from '@/features/subscription/components/ListCard'
import TableComponent from '@/features/subscription/components/SubscriptionTable'
function subscriptionpage() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroComponent />
      <div className="p-[60px] max-sm:p-[15px] max:md:p-[32px]">
        <ListCard />
      </div>
      <TableComponent />
      <Footer />
    </div>
  )
}
export default subscriptionpage
