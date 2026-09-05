import { AlertCircle, CheckCircle2, Eye, Mail, Search } from 'lucide-react'

import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { Textarea } from '@/ui/textarea'
import { Demo, Section } from '@/components/DesignSystem/Section'

function InputsSection() {
  return (
    <Section
      id="inputs"
      title="Inputs"
      description="Search will carry a lot of weight in food discovery, so it gets the most polish. Errors are never color-only."
    >
      <Demo label="Default / disabled" className="flex-col items-stretch sm:max-w-sm">
        <Input placeholder="Email" />
        <Input placeholder="Không thể chỉnh sửa" disabled />
      </Demo>

      <Demo label="Error state" className="flex-col items-stretch sm:max-w-sm">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="ds-email-error">Email</Label>
          <Input id="ds-email-error" defaultValue="an@sai-dinh-dang" aria-invalid />
          <p className="flex items-center gap-1 text-caption text-destructive">
            <AlertCircle className="size-3.5" />
            Email không đúng định dạng.
          </p>
        </div>
      </Demo>

      <Demo label="Success state" className="flex-col items-stretch sm:max-w-sm">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="ds-email-success">Email</Label>
          <Input id="ds-email-success" defaultValue="an@example.com" state="success" />
          <p className="flex items-center gap-1 text-caption text-success">
            <CheckCircle2 className="size-3.5" />
            Email hợp lệ.
          </p>
        </div>
      </Demo>

      <Demo label="With leading icon" className="flex-col items-stretch sm:max-w-sm">
        <Input placeholder="Search food..." leadingIcon={<Search />} />
        <Input placeholder="Email" leadingIcon={<Mail />} />
      </Demo>

      <Demo label="With trailing action" className="flex-col items-stretch sm:max-w-sm">
        <Input
          type="password"
          placeholder="Password"
          trailingAction={
            <button type="button" className="hover:text-foreground" aria-label="Hiện mật khẩu">
              <Eye className="size-4" />
            </button>
          }
        />
      </Demo>

      <Demo label="Textarea" className="flex-col items-stretch sm:max-w-sm">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="ds-textarea">Ghi chú cho quán</Label>
          <Textarea id="ds-textarea" placeholder="Ít cay, không hành..." />
        </div>
      </Demo>
    </Section>
  )
}

export { InputsSection }
