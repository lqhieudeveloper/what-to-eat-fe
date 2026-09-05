import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { Section } from '@/components/DesignSystem/Section'

function TabsSection() {
  return (
    <Section
      id="tabs"
      title="Tabs"
      description="For switching between closely related views, like different meal times or list/map views."
    >
      <Tabs defaultValue="all" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="near">Gần bạn</TabsTrigger>
          <TabsTrigger value="favorite">Yêu thích</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="text-body-sm text-muted-foreground">
          Hiển thị tất cả món ăn được đề xuất hôm nay.
        </TabsContent>
        <TabsContent value="near" className="text-body-sm text-muted-foreground">
          Chỉ hiển thị món ăn trong bán kính 2km.
        </TabsContent>
        <TabsContent value="favorite" className="text-body-sm text-muted-foreground">
          Danh sách món ăn bạn đã lưu.
        </TabsContent>
      </Tabs>
    </Section>
  )
}

export { TabsSection }
