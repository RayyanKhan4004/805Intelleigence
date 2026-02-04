import { cardProps } from '../types'
function Card({ children, className }: cardProps) {
  return (
    <div
      className={`w-[45%] rounded-[20px] h-auto ${className ? className : 'lg:p-10 lg:pt-6'} lg:p-10 lg:pt-6 shadow-field  bg-field-gradient`}
    >
      {children}
    </div>
  )
}

export default Card