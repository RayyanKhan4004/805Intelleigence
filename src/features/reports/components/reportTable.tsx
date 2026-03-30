'use client'
import Typography from '@/components/theme/Typography'
import { ReportRow } from '@/components/types'
import { Button } from '@/components/UI/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import { Icon } from '@/shared/icons/Icon'
import { EmbedPopUp } from './dialouges'
import { useState } from 'react'

interface tableDataProps {
  location: string
  views: number | string
  performance?: string
}
export function ReportTable({ tableData }: { tableData?: tableDataProps[] }) {
  const [popUp, setPopUp] = useState<undefined | 'embed' | 'snapshot' | 'pdf'>(undefined)
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Location
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Views
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Performance
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Quick Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData ? (
            tableData?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold text-[16px] text-app-primary ">
                  {cur.location}
                </TableCell>
                <TableCell>
                  {' '}
                  <div className="flex gap-[4px]">
                    <Typography className="font-bold text-[16px] text-app-primary">
                      {cur.views}
                    </Typography>{' '}
                    <Typography className="font-medium text-[16px] text-app-greyText">
                      {' '}
                      View
                    </Typography>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.performance || '---------'}
                </TableCell>

                <TableCell>
                  <div className="flex gap-[10px]">
                    <Button className="h-[44px] w-[137px]" variant={'outline'}>
                      {' '}
                      <Icon name={'share'} size={24} className="!w-6 !h-6" /> Share{' '}
                      <Icon name={'ArrowDown'} size={24} className="!w-6 !h-6" />
                    </Button>
                    <Button
                      className="h-[44px] w-[115px]"
                      variant={'outline'}
                      onClick={() => setPopUp('embed')}
                    >
                      {' '}
                      <Icon name={'DownDown'} size={24} className="!w-6 !h-6" /> Embed
                    </Button>
                    <Button className="h-[44px] w-[135px]" variant={'outline'}>
                      {' '}
                      <Icon name={'ChartLine'} size={24} className="!w-6 !h-6" /> Snapshot
                    </Button>
                    <Button className="h-[44px] w-[136px]" variant={'outline'}>
                      {' '}
                      <Icon name={'Clip'} size={24} className="!w-6 !h-6" /> Copy Link
                    </Button>
                    <Button className="h-[44px] w-[88px]" variant={'outline'}>
                      {' '}
                      <Icon name={'DownDown'} size={24} className="!w-6 !h-6" /> PDF
                    </Button>
                    <Button className="h-[44px] w-[110px]" variant={'outline'}>
                      {' '}
                      <Icon name={'Action'} size={24} className="!w-6 !h-6" />
                      Action
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
      <EmbedPopUp isOpen={popUp == 'embed'} onClose={() => setPopUp(undefined)} />
    </div>
  )
}

export default ReportTable
