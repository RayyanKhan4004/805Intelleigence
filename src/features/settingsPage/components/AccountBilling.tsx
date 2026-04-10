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

import { subscriptions } from './CreditData'

function AccountBilling() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Account Name
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Subscription
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Date
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions ? (
            subscriptions?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className=" text-[16px] text-app-greyText ">{cur.accountName}</TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.subscription}
                </TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.date}
                </TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.price}
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

export default AccountBilling
