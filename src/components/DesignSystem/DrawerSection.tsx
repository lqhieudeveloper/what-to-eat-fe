import { Button } from '@/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/ui/drawer'
import { Section } from '@/components/DesignSystem/Section'

function DrawerSection() {
  return (
    <Section
      id="drawer"
      title="Drawer"
      description="The mobile-first bottom-sheet pattern — filters, quick actions, anything that shouldn't leave the current screen."
    >
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Bộ lọc</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Bộ lọc món ăn</DrawerTitle>
            <DrawerDescription>Thu hẹp kết quả theo sở thích của bạn.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Áp dụng</Button>
            <Button variant="outline">Đặt lại</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Section>
  )
}

export { DrawerSection }
