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

import { props } from '@/components/types/DialogType'

export default function CustomPopup({
  title,
  Description,
  isOpen,
  onClose,
  children: content,
  trigger,
  className,
  footer,
}: props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent className={className}>
          <DialogHeader className="border-b border-app-stroke pb-2.5">
            <DialogTitle className="text-[25px] font-semibold text-app-primary">{title}</DialogTitle>
            <DialogDescription>{Description}</DialogDescription>
          </DialogHeader>
          {content}

          {footer && (
            <DialogFooter className="border-t border-app-stroke  mt-[30px] pt-5">
              {footer}
            </DialogFooter>
          )}
        </DialogContent>
      </form>
    </Dialog>
  )
}
