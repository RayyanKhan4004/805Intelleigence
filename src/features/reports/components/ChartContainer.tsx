import Typography from '@/components/theme/Typography'
import ReportCharts from './reportCharts'
import { Icon } from '@/shared/icons/Icon'
import type { ReportGridItem } from '../reportsApi'

function formatCurrency(val: string | number) {
  const num = typeof val === 'string' ? parseFloat(val) : val
  if (isNaN(num)) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num)
}

function ChartContainer({ report }: { report: ReportGridItem }) {
  const { result, name, county_name, city_name, farm_names } = report
  const location = [county_name, city_name].filter(Boolean).join(', ') || name

  const metrics = result
    ? [
        { title: 'Median List Price', price: formatCurrency(result.median_list_price) },
        { title: 'Avg DOM', price: result.days_on_market?.toString() ?? '—' },
        { title: 'Price/SqFt', price: result.price_per_sqft ? `$${parseFloat(result.price_per_sqft).toFixed(0)}` : '—' },
      ]
    : [
        { title: 'Median List Price', price: '—' },
        { title: 'Avg DOM', price: '—' },
        { title: 'Price/SqFt', price: '—' },
      ]

  return (
    <div
      className="p-6 rounded-[20px]"
      style={{
        boxShadow:
          '0px 2.55px 5.95px 0px #0000001A, 0px 10.48px 10.48px 0px #00000017, 0px 42.5px 17px 0px #00000005, 0px 66.3px 18.7px 0px #00000000',
      }}
    >
      <div className="flex flex-col gap-[16px]">
        <div>
          <Typography className="font-semibold text-[30px] text-app-primary" variant="PageHeading">
            {location}
          </Typography>
          {farm_names?.length > 0 && (
            <Typography className="text-[14px] text-app-greyText">
              {farm_names.join(', ')}
            </Typography>
          )}
        </div>
        <div className="flex gap-[40px] justify-between max-sm:flex-col">
          {metrics.map(item => (
            <PriceContainer key={item.title} title={item.title} price={item.price} />
          ))}
        </div>
      </div>
      <ReportCharts style={{ width: '100%', height: '205px' }} />
      <div className="flex items-center justify-between border-t-2 border-primary w-full pt-[12px]">
        <div className="flex items-center gap-[8px]">
          <Typography variant="h4" className="text-app-primary font-medium text-[20px]">
            {result ? `${result.inventory} Inventory` : 'Houses'}
          </Typography>
          {result?.list_to_sale_ratio && (
            <PercentBadge value={`${(parseFloat(result.list_to_sale_ratio) * 100 - 100).toFixed(2)}%`} />
          )}
        </div>
        <div className="flex gap-[16px]">
          <Icon name={'ChartLine'} width={26} height={22} />
          <Icon name={'share'} width={24} height={24} />
        </div>
      </div>
    </div>
  )
}

function PriceContainer({ title, price }: { title: string; price: string }) {
  return (
    <div className="px-[15px] pt-4 pb-6 rounded-[8px] bg-primary/5 w-[195px] h-[94px] justify-center flex flex-col text-center max-sm:w-full">
      <Typography variant="h4" className="font-semibold text-[20px] text-app-primary">
        {title}
      </Typography>
      <Typography variant="h5" className="font-semibold text-[18px] text-[rgb(var(--color-green))]">
        {price}
      </Typography>
    </div>
  )
}

function PercentBadge({ value }: { value: string }) {
  const num = parseFloat(String(value).replace('%', ''))
  const isPositive = !Number.isNaN(num) && num >= 0
  const bg = isPositive ? 'bg-[rgb(var(--color-green)/0.1)]' : 'bg-[rgb(var(--color-red)/0.1)]'
  const text = isPositive ? 'text-[rgb(var(--color-green)/1)]' : 'text-[rgb(var(--color-red)/1)]'
  return (
    <Typography
      variant="TableText"
      className={`px-3 py-1 rounded-[32px] font-medium text[16px] flex items-center ${bg} ${text}`}
    >
      <Icon name={'ArrowUp'} width={12} height={14} />
      {value}
    </Typography>
  )
}

export default ChartContainer
