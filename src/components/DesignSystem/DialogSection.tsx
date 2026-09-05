import { Button } from '@/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog'
import { Section } from '@/components/DesignSystem/Section'

function DialogSection() {
  return (
    <Section
      id="dialog"
      title="Dialog"
      description="For focused decisions that interrupt the flow — confirming a choice, showing full food details."
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button>Ăn món này</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🍜 Bún bò Huế</DialogTitle>
            <DialogDescription>
              Xác nhận lựa chọn món ăn cho hôm nay. Bạn có thể xem lại danh sách quán gần bạn.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Hủy</Button>
            <Button>Xác nhận</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Section>
  )
}

export { DialogSection }
