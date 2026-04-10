import Typography from '@/components/theme/Typography'
import ChartContainer from './ChartContainer'
import type { ReportGridItem } from '../reportsApi'

interface ChartGridProps {
  reports?: ReportGridItem[]
  isLoading?: boolean
  isError?: boolean
}

function ChartGrid({ reports, isLoading, isError }: ChartGridProps) {
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

  if (!reports || reports.length === 0) {
    return (
      <Typography className="w-full text-center py-10 text-app-greyText">
        No reports found.
      </Typography>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-[20px] max-lg:grid-cols-1">
      {reports.map(report => (
        <ChartContainer key={report.id} report={report} />
      ))}
    </div>
  )
}

export default ChartGrid
