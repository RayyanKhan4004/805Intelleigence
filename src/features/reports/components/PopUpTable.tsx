'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import { popupdata } from './dialouges/tabledatapopup'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Icon } from '@/shared/icons/Icon'

function PopTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Date
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Name
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Email
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Phone
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Loaction
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {popupdata ? (
            popupdata?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className=" text-[16px] text-app-greyText ">{cur.date}</TableCell>
                <TableCell>
                  {' '}
                  <Typography className="font-medium text-[16px] text-app-greyText">
                    {cur.name}
                  </Typography>{' '}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.mail}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.number}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.location}
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

export default PopTable
