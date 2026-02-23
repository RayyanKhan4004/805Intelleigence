import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/components/UI/tabs'
import { tabs } from '../enums'
import Link from 'next/link'

function NavTabs() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Reports')

  //
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    // const route = tabName.toLowerCase().replace(/\s+/g, '-')
    // router.push(`/${route}`)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-auto">
      <TabsList className="bg-app-primaryLight text-white  bg-gradient-to-b from-[#52616F] via-[#425262] to-[#52616F] max-md:w-full max-md:flex-col ">
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.name}
            value={tab.name}
            className="data-[state=active]:bg-white data-[state=active]:text-app-primary"
          >
            <Link href={tab.href}>{tab.name}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default NavTabs
