import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { Demo, Section } from '@/components/DesignSystem/Section'

function CardSection() {
  return (
    <Section
      id="card"
      title="Card"
      description="The base surface for grouped content. Interactive cards get a subtle hover; featured cards get a warmer, olive-tinted surface."
    >
      <Demo label="Variants" className="items-stretch">
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>Grounded, bordered surface.</CardDescription>
          </CardHeader>
          <CardContent className="text-body-sm text-muted-foreground">
            Dùng cho các khối nội dung thông thường.
          </CardContent>
        </Card>

        <Card variant="interactive" className="w-64">
          <CardHeader>
            <CardTitle>Interactive</CardTitle>
            <CardDescription>Hover to see the effect.</CardDescription>
          </CardHeader>
          <CardContent className="text-body-sm text-muted-foreground">
            Dùng cho các card có thể bấm vào.
          </CardContent>
        </Card>

        <Card variant="featured" className="w-64">
          <CardHeader>
            <CardTitle>Featured</CardTitle>
            <CardDescription>Olive-tinted, premium surface.</CardDescription>
          </CardHeader>
          <CardContent className="text-body-sm text-muted-foreground">
            Dùng cho nội dung nổi bật, như gợi ý món ăn.
          </CardContent>
        </Card>
      </Demo>
    </Section>
  )
}

export { CardSection }
