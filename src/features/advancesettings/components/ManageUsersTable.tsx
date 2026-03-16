import React from 'react'

import Typography from '@/components/theme/Typography'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import { users } from './Data'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'

function ManageUsersTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              User's Name
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Role
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Added Date
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users ? (
            users?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className=" text-[16px] text-app-greyText ">{cur.name}</TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.role}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.addedDate}
                </TableCell>
                <TableCell>
                  <div>
                    <Button className="h-[44px] w-[137px]" variant={'danger'}>
                      {' '}
                      <Icon name={'Delete'} size={24} className="!w-6 !h-6" /> Delete{' '}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Typography className="w-full text-center ">Error getting data </Typography>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default ManageUsersTable
