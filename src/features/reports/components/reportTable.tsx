'use client'
import Typography from '@/components/theme/Typography'
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

interface ReportTableRow {
  id: number
  name: string
  location: string
  farm_names?: string[]
  status: string
  format: string
  visibility: string
  created_at: string
}

interface ReportTableProps {
  tableData?: ReportTableRow[]
  isLoading?: boolean
  isError?: boolean
}

export function ReportTable({ tableData, isLoading, isError }: ReportTableProps) {
  const [popUp, setPopUp] = useState<undefined | 'embed'>(undefined)

  if (isLoading) {
    return (
      <Typography className="w-full text-center py-10 text-app-greyText">
        Loading reports...
      </Typography>
    )
  }

  if (isError) {
    return (
      <Typography className="w-full text-center py-10 text-red-500">
        Failed to load reports.
      </Typography>
    )
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[60px]">#</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Name</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Location</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Farms</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Status</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Format</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Created</TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px]">Quick Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData && tableData.length > 0 ? (
            tableData.map((cur) => (
              <TableRow key={cur.id}>
                <TableCell className="font-bold text-[16px] text-app-primary">{cur.id}</TableCell>
                <TableCell className="font-bold text-[16px] text-app-primary">{cur.name}</TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">{cur.location}</TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {cur.farm_names?.join(', ') || '—'}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText capitalize">{cur.status}</TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText uppercase">{cur.format}</TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {new Date(cur.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-[10px]">
                    <Button className="h-[44px] w-[137px]" variant={'outline'}>
                      <Icon name={'share'} size={24} className="!w-6 !h-6" /> Share{' '}
                      <Icon name={'ArrowDown'} size={24} className="!w-6 !h-6" />
                    </Button>
                    <Button
                      className="h-[44px] w-[115px]"
                      variant={'outline'}
                      onClick={() => setPopUp('embed')}
                    >
                      <Icon name={'DownDown'} size={24} className="!w-6 !h-6" /> Embed
                    </Button>
                    <Button className="h-[44px] w-[135px]" variant={'outline'}>
                      <Icon name={'ChartLine'} size={24} className="!w-6 !h-6" /> Snapshot
                    </Button>
                    <Button className="h-[44px] w-[136px]" variant={'outline'}>
                      <Icon name={'Clip'} size={24} className="!w-6 !h-6" /> Copy Link
                    </Button>
                    <Button className="h-[44px] w-[88px]" variant={'outline'}>
                      <Icon name={'DownDown'} size={24} className="!w-6 !h-6" /> PDF
                    </Button>
                    <Button className="h-[44px] w-[110px]" variant={'outline'}>
                      <Icon name={'Action'} size={24} className="!w-6 !h-6" /> Action
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8}>
                <Typography className="w-full text-center py-6 text-app-greyText">
                  No reports found.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <EmbedPopUp isOpen={popUp === 'embed'} onClose={() => setPopUp(undefined)} />
    </div>
  )
}

export default ReportTable
