export interface props {
  isOpen: boolean
  onClose: () => void
  title: string | React.ReactNode
  hideClose?: boolean
  Description?: string
  children: React.ReactNode
  trigger?: React.ReactNode
  className?: string
  footer?: React.ReactNode
}
