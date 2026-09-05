import { Search, SlidersHorizontal } from 'lucide-react'

import { Button } from '@/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/ui/drawer'
import { Input } from '@/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'

const FILTERS = [
  { label: 'Ẩm thực', placeholder: 'Ẩm thực', options: ['Việt Nam', 'Nhật Bản', 'Hàn Quốc', 'Ý'] },
  {
    label: 'Danh mục',
    placeholder: 'Danh mục',
    options: ['Món nước', 'Món khô', 'Ăn vặt', 'Tráng miệng'],
  },
  {
    label: 'Giá',
    placeholder: 'Giá',
    options: ['Dưới 50k', '50k – 100k', '100k – 200k', 'Trên 200k'],
  },
  {
    label: 'Khoảng cách',
    placeholder: 'Khoảng cách',
    options: ['Dưới 1km', '1 – 3km', '3 – 5km', 'Trên 5km'],
  },
  { label: 'Đánh giá', placeholder: 'Đánh giá', options: ['4.5+', '4.0+', '3.5+', 'Tất cả'] },
] as const

function FilterSelect({
  placeholder,
  options,
}: {
  placeholder: string
  options: readonly string[]
}) {
  return (
    <Select>
      <SelectTrigger className="w-fit min-w-[9rem]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function FoodFilterBar() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search food..."
          leadingIcon={<Search className="size-4" />}
          className="flex-1"
        />
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <SlidersHorizontal />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Bộ lọc</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-3 px-4 pb-4">
              {FILTERS.map((filter) => (
                <FilterSelect
                  key={filter.label}
                  placeholder={filter.placeholder}
                  options={filter.options}
                />
              ))}
              <Button className="mt-2">Áp dụng bộ lọc</Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden flex-wrap items-center gap-2 md:flex">
        {FILTERS.map((filter) => (
          <FilterSelect
            key={filter.label}
            placeholder={filter.placeholder}
            options={filter.options}
          />
        ))}
      </div>
    </div>
  )
}

export { FoodFilterBar }
