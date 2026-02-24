import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/components/UI/tabs'
import { tabs } from '../enums'
import Link from 'next/link'

function NavTabs() {
  // const router = useRouter()
  const [activeTab, setActiveTab] = useState('Reports')

  //
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    // const route = tabName.toLowerCase().replace(/\s+/g, '-')
    // router.push(`/${route}`)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-auto max-lg:mt-10  ">
      <TabsList className="h-[59px] bg-app-primaryLight text-white max-lg:bg-transparent lg:bg-gradient-to-b lg:from-[#52616F] lg:via-[#425262] lg:to-[#52616F] max-lg:w-full max-lg:flex-col max-lg:items-center max-xl:gap-2 gap-6 px-[16px]  ">
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.name}
            value={tab.name}
            className="data-[state=active]:bg-white data-[state=active]:text-app-primary text-[18px]  max-lg:w-full  max-lg:text-[26px] "
          >
            <Link href={tab.href}>{tab.name}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default NavTabs
