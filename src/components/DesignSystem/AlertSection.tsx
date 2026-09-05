import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/ui/alert'
import { Section } from '@/components/DesignSystem/Section'

function AlertSection() {
  return (
    <Section
      id="alert"
      title="Alert"
      description="Inline, non-blocking feedback — never the only way an error is communicated."
    >
      <div className="flex flex-col gap-3">
        <Alert variant="success">
          <CheckCircle2 />
          <AlertTitle>Đã lưu vào yêu thích</AlertTitle>
          <AlertDescription>Bún bò Huế đã được thêm vào danh sách yêu thích.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <TriangleAlert />
          <AlertTitle>Quán sắp đóng cửa</AlertTitle>
          <AlertDescription>Quán này đóng cửa trong 20 phút nữa.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Không thể tải dữ liệu</AlertTitle>
          <AlertDescription>Vui lòng kiểm tra kết nối mạng và thử lại.</AlertDescription>
        </Alert>
        <Alert variant="info">
          <Info />
          <AlertTitle>Mẹo</AlertTitle>
          <AlertDescription>Vuốt sang trái để xem thêm gợi ý món ăn.</AlertDescription>
        </Alert>
      </div>
    </Section>
  )
}

export { AlertSection }
