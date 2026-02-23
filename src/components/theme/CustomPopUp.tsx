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

import { props  } from '@/components/types/DialogType'

export default function CustomPopup({
  title,
  Description,
  isOpen,
  onClose,
  children: content,
  trigger,
}: props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{Description}</DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
      </form>
    </Dialog>
  )
}
