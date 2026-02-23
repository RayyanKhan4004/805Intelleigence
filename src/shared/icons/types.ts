import * as Icons from './index'

export type IconName = keyof typeof Icons

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  size?: number
  className?: string
}
