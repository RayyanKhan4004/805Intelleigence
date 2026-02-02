// components/reports-table.tsx
"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table"
import { Button } from "@/components/UI/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { ReportRow } from "@/types/index"

interface ReportsTableProps {
  data: ReportRow[];
  title : string[]
}

export function ReportsTable({ data,title }: ReportsTableProps) {
  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            {title.map((curr,ind)=><TableHead>{curr}</TableHead>)}
            {/* <TableHead>Location</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead className="text-right">
              Quick Actions
            </TableHead> */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              className="hover:bg-muted/40"
            >
              {/* Location */}
              <TableCell className="font-medium text-primary">
                {row.location}
              </TableCell>

              {/* Views */}
              <TableCell>
                {row.views} View
              </TableCell>

              {/* Performance */}
              <TableCell className="text-muted-foreground">
                ---------
              </TableCell>

              {/* Actions */}
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    Embed
                  </Button>
                  <Button variant="outline" size="sm">
                    Snapshot
                  </Button>
                  <Button variant="outline" size="sm">
                    Copy Link
                  </Button>
                  <Button variant="outline" size="sm">
                    PDF
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
