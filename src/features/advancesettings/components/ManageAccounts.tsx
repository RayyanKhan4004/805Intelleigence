import React from 'react'
import Header from '@/features/settingsp/components/Header'
import ManageUserTable from './ManageAccountsTable'
function ManageAccounts() {
  return (
    <div>
      <Header />
      <div className=" flex flex-col rounded-[20px] shadow-shadow p-5 px-[30px]">
        <div className="font-semibold text-[25px] text-app-primary">Manage Accounts</div>
        <div>
          <ManageUserTable />
        </div>
      </div>
    </div>
  )
}

export default ManageAccounts
