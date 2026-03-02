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
import { Icon } from '@/shared/icons/Icon'
import * as DialogPrimitive from '@radix-ui/react-dialog'
export default function CustomPopup({
  title,
  Description,
  isOpen,
  onClose,
  children: content,
  trigger,
  className,
  footer,
  hideClose,
}: props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form className="max-h-[90vh] overflow-y-scroll">
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent className={className + ' ' + 'max-h-[90vh] overflow-y-scroll min-w-[70vw]'}>
          <DialogHeader className="border-b border-app-stroke pb-2.5">
            <DialogTitle className="text-[25px] font-semibold text-app-primary">
              {title}
              {hideClose || (
                <DialogPrimitive.Close
                  className=" absolute !focus:ring-0 !ring-0 right-4 top-4  transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground  focus:outline-none focus:ring-0
                focus:ring-offset-0
                outline-none"
                >
                  <Icon name={'Cross'} width={40} height={40} />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </DialogTitle>
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
