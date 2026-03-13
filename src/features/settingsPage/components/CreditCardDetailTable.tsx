import Typography from '@/components/theme/Typography'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import React from 'react'
import { cards } from './CreditData'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'

function CreditCardDetailTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Name On card
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              card Number
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Expiry Date
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cards ? (
            cards?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className=" text-[16px] text-app-greyText ">{cur.name}</TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.cardNumber}
                </TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.expiryDate}
                </TableCell>

                <TableCell>
                  <div>
                    <Button className="h-[44px] w-[137px]" variant={'outline'}>
                      {' '}
                      <Icon name={'Update'} size={24} className="!w-6 !h-6" /> Update Card{' '}
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

export default CreditCardDetailTable
