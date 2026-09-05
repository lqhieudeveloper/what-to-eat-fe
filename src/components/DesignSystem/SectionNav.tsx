import type { SectionId } from '@/components/DesignSystem/Section'

const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'radius', label: 'Radius' },
  { id: 'shadows', label: 'Shadows' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'inputs', label: 'Inputs' },
  { id: 'select', label: 'Select' },
  { id: 'combobox', label: 'Combobox' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'radio', label: 'Radio' },
  { id: 'switch', label: 'Switch' },
  { id: 'slider', label: 'Slider' },
  { id: 'badge', label: 'Badge' },
  { id: 'card', label: 'Card' },
  { id: 'food-card', label: 'Food Card' },
  { id: 'food-rating', label: 'Food Rating' },
  { id: 'recommendation-card', label: 'Recommendation Card' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'drawer', label: 'Drawer' },
  { id: 'dropdown', label: 'Dropdown' },
  { id: 'tooltip', label: 'Tooltip' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'alert', label: 'Alert' },
  { id: 'toast', label: 'Toast' },
  { id: 'skeleton', label: 'Skeleton' },
  { id: 'empty-state', label: 'Empty State' },
  { id: 'error-state', label: 'Error State' },
  { id: 'loading-state', label: 'Loading State' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'navigation', label: 'Navigation' },
]

function SectionNav() {
  return (
    <nav
      aria-label="Design system sections"
      className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-48 shrink-0 flex-col gap-0.5 overflow-y-auto pr-2 lg:flex"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="rounded px-2.5 py-1.5 text-body-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export { SectionNav, NAV_LINKS }
