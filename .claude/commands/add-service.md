# Add Service

Create a new service file following the static-method class pattern.

**Usage:** `/add-service <PageName>`

Where `<PageName>` is PascalCase (e.g. `FoodList`, `Auth`, `Order`).

## File to Create

`src/services/<PageName>Service.ts`

## Template

```ts
import { axiosInstance } from '@/axios'
import type { Get<PageName>ListRequest } from '@/types/<pageName>/requests'
import type { <PageName>ListResponse } from '@/types/<pageName>/responses'

export class <PageName>Service {
  static async getList(params: Get<PageName>ListRequest) {
    const res = await axiosInstance.get<<PageName>ListResponse>('/<endpoint>', { params })
    return <PageName>Service.mapList(res.data)
  }

  private static mapList(raw: <PageName>ListResponse) {
    return {
      // map snake_case → camelCase here
    }
  }
}
```

## Rules

- All methods must be `static`
- Private mapping helpers must be `private static`
- Request payload must be mapped to match backend API field names before sending
- Response must be mapped to camelCase before returning — never return raw snake_case to callers
- Never `console.log` — use `console.warn` or `console.error` if needed
- Run `pnpm check-type` after creating
