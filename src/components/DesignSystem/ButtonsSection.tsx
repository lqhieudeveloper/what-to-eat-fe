import { Heart, Loader2, Shuffle, SlidersHorizontal } from 'lucide-react'

import { Button } from '@/ui/button'
import { Demo, Section } from '@/components/DesignSystem/Section'

function ButtonsSection() {
  return (
    <Section
      id="buttons"
      title="Buttons"
      description="Primary actions use the olive primary color — strong and inviting without being aggressive."
    >
      <Demo label="Variants">
        <Button>Hôm nay ăn gì?</Button>
        <Button variant="secondary">Bộ lọc</Button>
        <Button variant="outline">Thử món khác</Button>
        <Button variant="ghost">Hủy</Button>
        <Button variant="destructive">Xóa</Button>
        <Button variant="link">Xem tất cả</Button>
      </Demo>

      <Demo label="Sizes">
        <Button size="sm">Đăng nhập</Button>
        <Button size="default">Đăng nhập</Button>
        <Button size="lg">Đăng nhập</Button>
        <Button size="xl">Ăn món này</Button>
      </Demo>

      <Demo label="Icon buttons">
        <Button size="icon-sm" variant="outline">
          <Heart />
        </Button>
        <Button size="icon" variant="outline">
          <SlidersHorizontal />
        </Button>
        <Button size="icon-lg" variant="outline">
          <Shuffle />
        </Button>
      </Demo>

      <Demo label="With icon">
        <Button>
          <Heart />
          Yêu thích
        </Button>
        <Button variant="outline">
          <Shuffle />
          Thử món khác
        </Button>
      </Demo>

      <Demo label="States">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Đang xử lý...
        </Button>
      </Demo>
    </Section>
  )
}

export { ButtonsSection }
