import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { Demo, Section } from '@/components/DesignSystem/Section'

function SelectSection() {
  return (
    <Section
      id="select"
      title="Select"
      description="For short, known option lists — cuisine, price band, distance, sort order."
    >
      <Demo label="Cuisine">
        <Select defaultValue="viet">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Ẩm thực" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="viet">Việt Nam</SelectItem>
            <SelectItem value="jp">Nhật Bản</SelectItem>
            <SelectItem value="kr">Hàn Quốc</SelectItem>
            <SelectItem value="it">Ý</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <Demo label="Sort">
        <Select defaultValue="rating">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sắp xếp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
            <SelectItem value="distance">Gần nhất</SelectItem>
            <SelectItem value="price-asc">Giá thấp đến cao</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <Demo label="Disabled">
        <Select disabled>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Khoảng cách" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1km">Dưới 1km</SelectItem>
          </SelectContent>
        </Select>
      </Demo>
    </Section>
  )
}

export { SelectSection }
