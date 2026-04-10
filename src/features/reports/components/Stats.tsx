import Typography from '@/components/theme/Typography'           
import { data } from '../Data'

function Stats() {
  return (
    <div className="w-full px-10 mb-[30px] flex justify-center    max-md:px-6 max-sm:px-6 max-lg:px-6">
      <div
        className=" grid grid-cols-4 gap-10
          bg-app-primary text-white
          rounded-[12px] 
          px-10 py-6
          max-lg:grid-cols-2
          max-sm:grid-cols-1 max-sm:w-full max-md:w-full max-lg:w-full
          "
      >
        {data.map((curr, ind) => (
          <div
            className={`${ind > 0 && 'border-l-2 pl-[60px] border-white'} max-sm:border-l-2 pl-[60px] border-white`}
            key={ind}
          >
            <Typography variant="h3" className="w-bold  font-bold text-[40px] ">
              {curr.title}
            </Typography>
            <Typography variant="Heading2" className=" font-medium text-[24px]  ">
              {curr.sub}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
