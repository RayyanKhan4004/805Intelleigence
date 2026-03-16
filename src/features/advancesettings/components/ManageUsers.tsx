import Header from '@/features/settingsp/components/Header'
import React from 'react'
import ManageUsersTable from './ManageUsersTable'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'

function ManageUsers() {
  return (
    <div>
      <Header />
      <div className=" flex flex-col rounded-[20px] shadow-shadow p-5 px-[30px]">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-[25px] text-app-primary">Manage Accounts</div>
          <div>
            {' '}
            <Button className="p-4 w-[162px] h-[56px] flex items-center">
              {' '}
              <Icon name="Plus" className="!w-6 !h-6" /> Add New User
            </Button>
          </div>
        </div>
        <div>
          <ManageUsersTable />
        </div>
      </div>
    </div>
  )
}

export default ManageUsers
