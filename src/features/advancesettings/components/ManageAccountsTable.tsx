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
import { manageAccounts } from './Data'

function ManageAccountsTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Name
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Subscription
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Zip
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Counties
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Regions
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Seats
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {manageAccounts ? (
            manageAccounts?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className=" text-[16px] text-app-greyText ">{cur.name}</TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.subscription}
                </TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.zip}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.counties}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.regions}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.seats}
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

export default ManageAccountsTable
