import { ArrowUpDown, Flame, Star, TrendingUp } from 'lucide-react'

import { Button } from '@/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import { Section } from '@/components/DesignSystem/Section'

function DropdownSection() {
  return (
    <Section
      id="dropdown"
      title="Dropdown"
      description="For a short list of actions or sort options attached to a trigger."
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ArrowUpDown />
            Sắp xếp
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Sắp xếp theo</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Star />
            Đánh giá cao nhất
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TrendingUp />
            Phổ biến nhất
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Flame />
            Mới nhất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Section>
  )
}

export { DropdownSection }
