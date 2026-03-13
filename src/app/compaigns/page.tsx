import React from 'react'
import Layout from '@/components/theme/Layout'
import Header from '@/features/compaigns/components/Header'
import CompaignsTable from '@/features/compaigns/components/compaignsTable'



function page() {
  return (
    <Layout settings={{ navbar: true}}>
<div>
    <Header/>
  <CompaignsTable/>
</div>
    </Layout>
  )
}

export default page
