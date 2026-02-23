import Typography from '@/components/theme/Typography'
import { data } from '../Data'

function Stats() {
  return (
    <div className="w-full px-10 mb-[30px] flex justify-center">
      <div className="flex flex-wrap gap-10 bg-primary text-white max-w-[1156px] rounded-[12px] justify-center px-10 py-6  ">
        {data.map((curr, ind) => (
          <div className={`${ind > 0 && 'border-l-2 pl-[60px] border-white'}`} key={ind}>
            <Typography variant="h3" className="w-bold  font-bold text-[40px] ">
              {curr.title}
            </Typography>
            <Typography variant="Heading2" className=" font-medium text-[24px] ">
              {curr.sub}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
