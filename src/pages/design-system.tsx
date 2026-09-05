import { createFileRoute } from '@tanstack/react-router'

import { PageContainer } from '@/components/Common/PageContainer'
import { AlertSection } from '@/components/DesignSystem/AlertSection'
import { BadgeSection } from '@/components/DesignSystem/BadgeSection'
import { ButtonsSection } from '@/components/DesignSystem/ButtonsSection'
import { CardSection } from '@/components/DesignSystem/CardSection'
import { CheckboxSection } from '@/components/DesignSystem/CheckboxSection'
import { ColorsSection } from '@/components/DesignSystem/ColorsSection'
import { ComboboxSection } from '@/components/DesignSystem/ComboboxSection'
import { DialogSection } from '@/components/DesignSystem/DialogSection'
import { DrawerSection } from '@/components/DesignSystem/DrawerSection'
import { DropdownSection } from '@/components/DesignSystem/DropdownSection'
import { EmptyStateSection } from '@/components/DesignSystem/EmptyStateSection'
import { ErrorStateSection } from '@/components/DesignSystem/ErrorStateSection'
import { FoodCardSection } from '@/components/DesignSystem/FoodCardSection'
import { FoodRatingSection } from '@/components/DesignSystem/FoodRatingSection'
import { InputsSection } from '@/components/DesignSystem/InputsSection'
import { LoadingStateSection } from '@/components/DesignSystem/LoadingStateSection'
import { NavigationSection } from '@/components/DesignSystem/NavigationSection'
import { OverviewSection } from '@/components/DesignSystem/OverviewSection'
import { PaginationSection } from '@/components/DesignSystem/PaginationSection'
import { RadioSection } from '@/components/DesignSystem/RadioSection'
import { RadiusSection } from '@/components/DesignSystem/RadiusSection'
import { RecommendationCardSection } from '@/components/DesignSystem/RecommendationCardSection'
import { SectionNav } from '@/components/DesignSystem/SectionNav'
import { SelectSection } from '@/components/DesignSystem/SelectSection'
import { ShadowsSection } from '@/components/DesignSystem/ShadowsSection'
import { SkeletonSection } from '@/components/DesignSystem/SkeletonSection'
import { SliderSection } from '@/components/DesignSystem/SliderSection'
import { SpacingSection } from '@/components/DesignSystem/SpacingSection'
import { SwitchSection } from '@/components/DesignSystem/SwitchSection'
import { TabsSection } from '@/components/DesignSystem/TabsSection'
import { ToastSection } from '@/components/DesignSystem/ToastSection'
import { TooltipSection } from '@/components/DesignSystem/TooltipSection'
import { TypographySection } from '@/components/DesignSystem/TypographySection'

export const Route = createFileRoute('/design-system')({
  component: DesignSystemPage,
})

function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="border-b bg-card">
        <PageContainer className="flex flex-col gap-2 py-10">
          <span className="text-caption font-semibold tracking-wide text-primary uppercase">
            Design System
          </span>
          <h1 className="text-h1 font-bold text-foreground">WhatToEat</h1>
          <p className="max-w-2xl text-body-lg text-muted-foreground">
            Warm Cream × Olive — the visual language behind a food app built to answer one question
            fast.
          </p>
        </PageContainer>
      </div>

      <PageContainer className="flex gap-10 py-8">
        <SectionNav />
        <div className="min-w-0 flex-1">
          <OverviewSection />
          <ColorsSection />
          <TypographySection />
          <SpacingSection />
          <RadiusSection />
          <ShadowsSection />
          <ButtonsSection />
          <InputsSection />
          <SelectSection />
          <ComboboxSection />
          <CheckboxSection />
          <RadioSection />
          <SwitchSection />
          <SliderSection />
          <BadgeSection />
          <CardSection />
          <FoodCardSection />
          <FoodRatingSection />
          <RecommendationCardSection />
          <DialogSection />
          <DrawerSection />
          <DropdownSection />
          <TooltipSection />
          <TabsSection />
          <AlertSection />
          <ToastSection />
          <SkeletonSection />
          <EmptyStateSection />
          <ErrorStateSection />
          <LoadingStateSection />
          <PaginationSection />
          <NavigationSection />
        </div>
      </PageContainer>
    </main>
  )
}
