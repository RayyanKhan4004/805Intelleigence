import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import Typography from '@/components/theme/Typography'
import { Icon } from '@/shared/icons/Icon'
//    interface tableProps {
//   id: number
//   property: string
//   report: string
//   name: string
//   email: string
//   location: string
//   campaign: string
//   campaignStatus: string
//   option: string
//   views: number | string
//   source: string
//   added: string
// }
interface tableProps {
  id: number
  property: string
  email: string
  location: string
  campaign: string
  campaignStatus: string
  option?: string
  views?: string | number
  source: string
  added: string
 
}
 export function ContactsTable({ table }:{ table?: tableProps[] }) {
  return (
    <div>
      <Table>
         <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Property
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Repot(s)
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Compaign
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Option
            </TableHead>
             <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Views
            </TableHead>
             <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Source
            </TableHead>
             <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Added
            </TableHead>
          </TableRow>
        </TableHeader>
         <TableBody>
  {table?.map((cur) => (
    <TableRow key={cur.id}>
      
      {/* Property */}
      <TableCell>
        <div className="flex flex-col">
          <span className="font-bold text-[16px] text-app-primary">
            {cur.property}
          </span>
          <span className=" font-medium text-[16px] text-app-greyText">
            {cur.email}
          </span>
        </div>
      </TableCell>

      {/* Reports */}
      <TableCell>
         <div className="flex flex-col gap-[10px]">
            <Icon name="HomePlus" className="!w-[20px] !h-[20px]" />
        <Typography className="font-medium text-[16px] text-app-greyText text-nowrap">
          {cur.location}
        </Typography>
        </div>
      </TableCell>

      {/* Campaign */}
      <TableCell>
        <div className="flex flex-col">
          <span className="font-bold text-[16px] text-app-primary text-nowrap">
            {cur.campaign}
          </span>
          <span className=" font-medium text-[16px] text-app-greyText">
            {cur.campaignStatus}
          </span>
        </div>
      </TableCell>
     

      {/* Option */}
      <TableCell className="font-bold text-[16px] text-app-primary ">
        {cur.option || "--------"}
      </TableCell>

      {/* Views */}
      <TableCell className="font-bold text-[16px] text-app-primary ">
        {cur.views || "--------"}
      </TableCell>

      {/* Source */}
      <TableCell className="font-bold text-[16px] text-app-primary ">
        {cur.source}
      </TableCell>

      {/* Added */}
      <TableCell className="font-bold text-[16px] text-app-primary ">
        {cur.added}
      </TableCell>

    </TableRow>
  ))}
</TableBody>
      </Table>
    </div>
  )
}

export default ContactsTable
