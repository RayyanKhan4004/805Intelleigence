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

interface STableProps {
  id: number
  name: string
  campaignId: number
  sends: string
  clicks: string
  status: string
  contacts: string
}
export function CompaignsTable({ SData }: { SData?: STableProps[] }) {
  return (
    <div className="p-[60px]   max-md:px-6 max-sm:px-6 max-lg:px-6">
      <Table>
        <TableHeader>
          <TableRow className="bg-app-mutedBg border-app-primary border-b">
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px]">
              Name
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary  h-[60px] w-[295px] ">
              Sends
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px]">
              Clicks
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Status
            </TableHead>
            <TableHead className="font-bold text-[20px] text-app-primary h-[60px] w-[295px] ">
              Quick Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {SData ? (
            SData.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-bold text-[16px] text-app-primary">{item.name}</span>
                    <span className="font-medium text-[16px] text-app-greyText">Never sent.</span>
                    <span className="text-[16px] font-medium text-app-greyText">
                      Campaign ID:{' '}
                      <b className="text-[16px] font-medium text-app-primary">{item.campaignId}</b>
                    </span>
                  </div>
                </TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {item.sends}
                </TableCell>

                <TableCell className="font-medium text-[16px] text-app-greyText">
                  {item.clicks}
                </TableCell>

                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-[16px] text-app-greyText">{item.status}</span>
                    <span className="font-medium text-[16px] text-app-greyText">
                      {item.contacts}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex gap-[10px]">
                    <Button className="h-[44px] w-[137px]" variant={'outline'}>
                      Lead Form
                    </Button>
                    <Button className="h-[44px] w-[115px]" variant={'outline'}>
                      Preview Email
                    </Button>
                    <Button className="h-[44px] w-[135px]" variant={'outline'}>
                      Edit Campaign
                    </Button>
                    <Button className="h-[44px] w-[136px]" variant={'outline'}>
                      Assign Contacts
                    </Button>

                    <Button className="h-[44px] w-[110px]" variant={'outline'}>
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
    </div>
  )
}

export default CompaignsTable
