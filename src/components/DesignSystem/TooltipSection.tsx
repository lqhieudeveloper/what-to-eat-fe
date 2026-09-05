import { Heart, MapPin } from 'lucide-react'

import { Button } from '@/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'
import { Demo, Section } from '@/components/DesignSystem/Section'

function TooltipSection() {
  return (
    <Section
      id="tooltip"
      title="Tooltip"
      description="Short, functional hints for icon-only actions."
    >
      <Demo label="Icon action">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Heart />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Yêu thích</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <MapPin />
            </Button>
          </TooltipTrigger>
          <TooltipContent>800m từ vị trí của bạn</TooltipContent>
        </Tooltip>
      </Demo>
    </Section>
  )
}

export { TooltipSection }
