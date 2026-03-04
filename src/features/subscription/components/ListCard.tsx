import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { listCardData } from '../Data'

function ListCard() {
  return (
    <div className="flex gap-[20px] justify-center flex-nowrap items-center max-sm:flex-col  max-xl:flex-wrap   ">
      {listCardData.map(item => {
        return (
          <div className="flex  gap-4 flex-col justify-between border border-app-stroke rounded-[32px] p-[40px] bg-gradient-to-br from-[#EAECEE] to-[#FFFFFF] !h-[603px] ">
            <div className="w-full max-w-[451px]">
              <Typography variant="Heading1" className="text-left text-app-primary font-bold ">
                {item.title}
              </Typography>
              <Typography variant="Heading2" className="text-left text-app-primary text-[24px]">
                {item.subtitle}
              </Typography>
              <Typography
                variant="h8"
                className="w-full text-nowrap flex justify-center font-medium text-app-green text-[32px] items-center"
              >
                {item.price}
                <Typography variant="TableTextSize" className="text-[14px]">
                  / per year
                </Typography>
              </Typography>
              <ul className="mt-6 space-y-4 ">
                {item.li.map((curr, ind) => (
                  <li
                    key={ind}
                    className="flex items-center gap-3 text-app-primary font-medium text-[16px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-app-primary block shrink-0" />
                    <Typography variant="TableText" as="span">
                      {curr}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Button className="rounded-[6px] text-white font-semibold text-[24px]  h-full px-[40px] py-[16px] ">
                {item.button}
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListCard
