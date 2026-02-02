'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import { ReportRow } from '@/types/index'

interface ReportsTableProps {
  data: ReportRow[]
  title: (keyof ReportRow)[]
}

export function ReportsTable({ data, title }: ReportsTableProps) {
  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            {title.map(key => (
              <TableHead key={String(key)}>{String(key)}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(row => (
            <TableRow key={row.id} className="hover:bg-muted/40">
              {title.map(key => (
          <TableCell key={String(key)}>{String(row[key] || '-----------------')}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
