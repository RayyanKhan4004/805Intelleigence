import ChartContainer from './ChartContainer'

const data = ['Santa Barbara ', 'Ventura', 'Kern', 'Riverside', 'Kern', 'Riverside']
function ChartGrid() {
  return (
    <div className="grid grid-cols-2 gap-[20px] max-lg:grid-cols-1">
      {data.map((curr, ind) => (
        <div key={ind}>
          <ChartContainer title={curr} />
        </div>
      ))}
    </div>
  )
}

export default ChartGrid
