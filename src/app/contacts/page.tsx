import React from 'react'
import Layout from '@/components/theme/Layout'
import { Button } from '@/components/UI/button'
import Typography from '@/components/theme/Typography'
import { Input } from '@/components/UI/input'
import { Icon } from '@/shared/icons/Icon'
import Head from '@/features/contacts/components/Head'
import { ContactsTable } from '@/features/contacts/components/ContactsTable'
import {table } from '@/features/reports/Data'
function page() {
  return (
    <Layout settings={{ navbar: true }}>
      <div>
       <Head/>
       <ContactsTable table={table} />
      </div>
    </Layout>
  )
}

export default page
