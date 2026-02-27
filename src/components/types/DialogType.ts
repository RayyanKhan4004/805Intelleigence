export interface props {
  isOpen: boolean
  onClose: () => void
  title: string
  Description?: string
  children: React.ReactNode
  trigger?: React.ReactNode
  className?: string
  footer?:React.ReactNode
}
