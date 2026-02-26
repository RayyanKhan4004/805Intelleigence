import { Button } from '@/components/UI/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/UI/dialog'
// import { Field, FieldGroup } from "@/components/UI/field"
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'

import { props } from '@/components/types/DialogType'
import Typography from './Typography'

export default function CustomPopup({
  title,
  Description,
  isOpen,
  onClose,
  children: content,
  trigger,
  className,
}: props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent className={className}>
          <DialogHeader className="border-b border-app-stroke pb-2.5">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{Description}</DialogDescription>
            
          </DialogHeader>
          {content}
          <div  className="border-b border-app-stroke pb-2.5"></div>
          <div>
            <Typography className='text-[14px] text-app-greyText'>Maps by Leaflet | © OpenStreetMap contributors</Typography>

          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
