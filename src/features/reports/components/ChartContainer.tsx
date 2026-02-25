import Typography from '@/components/theme/Typography'
import ReportCharts from './reportCharts'
import { Icon } from '@/shared/icons/Icon'

const data = [
  {
    title: 'Median List price',
    price: '$233,000',
  },
  {
    title: 'Avg DOM',
    price: '$233,000',
  },
  {
    title: 'Market Action',
    price: '$233,000',
  },
]

function ChartContainer({ title }: { title: string }) {
  return (
    <div
      className="p-6 rounded-[20px]"
      style={{
        boxShadow:
          '0px 2.55px 5.95px 0px #0000001A, 0px 10.48px 10.48px 0px #00000017, 0px 42.5px 17px 0px #00000005, 0px 66.3px 18.7px 0px #00000000',
      }}
    >
      {' '}
      <div className='flex flex-col gap-[16px]' >
        <div>
          <Typography className='font-semibold text-[30px] text-app-primary' variant="PageHeading">{title}</Typography>
        </div>
        <div className="flex gap-[40px] justify-between ">
          {data.map(item => {
            return priceContainer({ title: item.title, price: item.price })
          })}
        </div>
      </div>
      <ReportCharts style={{ width: '100%', height: '205px' }} />
      <div className='flex items-center'>
      <div className="border-t-2 border-primary w-full flex items-center gap-[8px]  pt-[12px]">
        <Typography variant="h4" className="text-app-primary font-medium text-[20px]">
          Houses
        </Typography>
        <div>
          <PercentBadge value="3.2%" />
        </div>
      </div>

     <div className='flex gap-[16px]'>
       <Icon className='' name={'ChartLine'} width={26} height={22} />
        <Icon name={'share'} width={24} height={24} />
     </div>
      </div>

    </div>
  )
}

function priceContainer({ title, price }: { title: string; price: string }) {
  return (
    <div className="px-[15px] pt-4 pb-6 rounded-[8px] bg-primary/5 w-[195px] h-[94px] justify-center flex flex-col text-center ">
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
    <Typography variant="TableText" className={`px-3 py-1 rounded-[32px] font-medium text[16px] flex items-center ${bg} ${text}`}>
     <Icon name={'ArrowUp'} width={12} height={14} />
      {value}
    </Typography>
  )
}
export default ChartContainer
