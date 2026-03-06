import Typography from '@/components/theme/Typography'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'

interface tableDataProps {
  Property: string
  'SQ FT': string
  ' # Bed': string
  '# Bath': string
  '$ Selling': string
  'Date Sold': string
  Dom: string
}
export function DetailTable({ tableData }: { tableData?: tableDataProps[] }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Property
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              SQ FT
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              # Bed
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              # Bath
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              $ Selling
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Date Sold
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Dom
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData ? (
            tableData?.map((cur, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-[16px] text-app-greyText text-nowrap">
                  {cur.Property}
                </TableCell>
                <TableCell>
                  {' '}
                  <div className="flex gap-[4px]">
                    <Typography className="font-medium text-[16px] text-app-greyText">
                      {cur['SQ FT']}
                    </Typography>{' '}
                  </div>
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur[' # Bed'] }
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur['# Bath']}
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur['$ Selling'] }
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur['Date Sold'] }
                </TableCell>
                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {' '}
                  {cur.Dom }
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

export default DetailTable
