# Anti-patterns

Things to **NEVER** do in this codebase. This file complements CLAUDE.md — CLAUDE.md says what to do, this file says what to never do.

---

## Layer Violations

### ❌ Component importing a service directly

```ts
// WRONG — components must not know services exist
import { HomepageService } from '@/services/HomepageService'
```

```ts
// CORRECT — components only use TanStack Query hooks
import { useFoodList } from '@/queries/query/Homepage/useFoodList'
```

### ❌ Importing axios inside a component or hook

```ts
// WRONG
import axios from 'axios'
import { axiosInstance } from '@/axios'
```

`axiosInstance` may only be imported inside `src/services/`. Nowhere else.

---

## TypeScript

### ❌ Using `interface` instead of `type`

```ts
// WRONG
interface FoodItem {
  id: number
  name: string
}

// CORRECT
type FoodItem = { id: number; name: string }
```

### ❌ Type assertion with `as`

```ts
// WRONG
const data = response as FoodListResponse
const el = document.getElementById('root') as HTMLElement

// CORRECT — use a type guard or properly typed generic instead
```

Exception: `src/ui/` (shadcn-generated code) is exempt from this rule.

### ❌ `any` type

```ts
// WRONG
const handleData = (data: any) => { ... }

// CORRECT — use a specific type or `unknown` with a type guard
```

---

## Data Fetching

### ❌ `useEffect` for data fetching

```ts
// WRONG
useEffect(() => {
  fetch('/api/foods').then((res) => setFoods(res.json()))
}, [])

// CORRECT
const { data: foods } = useFoodList()
```

### ❌ Zustand for server data

```ts
// WRONG — server data must not live in Zustand
const useFoodStore = create(() => ({ foods: [], fetchFoods: async () => { ... } }))

// CORRECT — server data belongs in TanStack Query
```

Zustand is only for client/UI state: auth tokens, sidebar open, selected tab, multi-step form state, etc.

---

## Styling

### ❌ Inline styles

```tsx
// WRONG
<div style={{ backgroundColor: '#2e7d99', padding: '16px' }}>

// CORRECT
<div className="bg-brand-primary p-4">
```

### ❌ Hardcoded hex colors or pixel values in className

```tsx
// WRONG
<div className="bg-[#2e7d99] p-[16px]">

// CORRECT — use design tokens
<div className="bg-brand-primary p-4">
```

---

## UI Components

### ❌ Building a custom component when shadcn already has one

```tsx
// WRONG — never hand-roll Dialog, Modal, Toast, Button, etc.
function CustomModal({ open, children }) { ... }

// CORRECT — install from shadcn first
// pnpm dlx shadcn@latest add dialog
import { Dialog } from '@/ui/dialog'
```

If the needed component is not yet in `src/ui/`, **stop and ask the user** to install it via `/add-shadcn`.

---

## Logging

### ❌ `console.log`

```ts
// WRONG — ESLint will error
console.log('debug:', data)

// CORRECT — only warn/error are allowed
console.warn('Something unexpected:', data)
console.error('Failed to fetch:', error)
```

---

## Naming

### ❌ snake_case in component variables

```ts
// WRONG
const food_list = useFoodList()
const { total_count } = food_list

// CORRECT
const foodList = useFoodList()
const { totalCount } = foodList
```

### ❌ camelCase folder names inside components/, hooks/, queries/

```
// WRONG
src/components/foodList/FoodCard.tsx
src/hooks/homepage/use-food-filter.ts

// CORRECT
src/components/FoodList/FoodCard.tsx
src/hooks/Homepage/use-food-filter.ts
```

Exception: `src/types/` uses camelCase for folders (`foodList/`, `homepage/`).
