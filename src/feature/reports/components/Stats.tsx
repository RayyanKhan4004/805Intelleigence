import Typography from '@/components/theme/Typography'
import { data } from '../Data'

function Stats() {
  return (
   <div className="w-full flex justify-center mb-[30px]">
             <div className="flex gap-10 bg-primary text-white w-[1156px] h-[150px] rounded-[12px] justify-center px-10 py-6">
               {data.map((curr, ind) => (
                 <div className={`${ind > 0 && 'border-l-2 pl-[60px] border-white'}`} key={ind}>
                   <Typography variant="h3" className="w-bold ">
                     {curr.title}
                   </Typography>
                   <Typography variant="Heading2" className="font-medium">
                     {curr.sub}
                   </Typography>
                 </div>
               ))}
             </div>
           </div>
  )
}

export default Stats
