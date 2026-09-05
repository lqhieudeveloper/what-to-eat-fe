import { toast } from 'sonner'

import { Button } from '@/ui/button'
import { Demo, Section } from '@/components/DesignSystem/Section'

function ToastSection() {
  return (
    <Section
      id="toast"
      title="Toast"
      description="Brief, self-dismissing confirmation for actions that don't need a full dialog."
    >
      <Demo label="Trigger a toast">
        <Button variant="outline" onClick={() => toast.success('Đã thêm vào yêu thích')}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error('Không thể kết nối máy chủ')}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast.info('Quán đóng cửa lúc 22:00')}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning('Sắp hết chỗ ngồi')}>
          Warning
        </Button>
      </Demo>
    </Section>
  )
}

export { ToastSection }
