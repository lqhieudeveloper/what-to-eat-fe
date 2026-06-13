# Add New Page Scaffold

Scaffold all required files for a new page following project conventions.

**Usage:** `/add-page <PageName>`

Where `<PageName>` is PascalCase (e.g. `FoodList`, `Homepage`, `OrderDetail`).

## Files to Create

Given `$ARGUMENTS` = `FoodList`, create these files:

### Types (`src/types/foodList/`)

- `src/types/foodList/entities.ts` — empty, with comment: `// React component types — PascalCase names, camelCase fields`
- `src/types/foodList/requests.ts` — empty, with comment: `// API request payload types — camelCase fields`
- `src/types/foodList/responses.ts` — empty, with comment: `// Raw backend response types — snake_case fields allowed`

### Schema (`src/schema/`)

- `src/schema/foodListSchema.ts` — empty Zod schema file:
  ```ts
  import { z } from 'zod'
  export const foodListSchema = z.object({})
  export type FoodListFormValues = z.infer<typeof foodListSchema>
  ```

### Service (`src/services/`)

- `src/services/FoodListService.ts` — static class shell:
  ```ts
  export class FoodListService {
    static async getList() {}
  }
  ```

### Query hook (`src/queries/query/FoodList/`)

- `src/queries/query/FoodList/useFoodList.ts` — useQuery shell

### Mutation hook (`src/queries/mutations/FoodList/`)

- `src/queries/mutations/FoodList/useCreateFoodList.ts` — useMutation shell

### Component folder (`src/components/FoodList/`)

- `src/components/FoodList/index.ts` — empty barrel

### Route file (`src/pages/`)

- `src/pages/<kebab-name>.tsx` — TanStack Router file route:

  ```tsx
  import { createFileRoute } from '@tanstack/react-router'

  export const Route = createFileRoute('/<path>')({
    component: <PageName>Page,
  })

  function <PageName>Page() {
    return <div>{/* scaffold */}</div>
  }
  ```

## Rules

- Folder names: types/ → camelCase, everything else → PascalCase
- Route file name: kebab-case matching the URL path (e.g. `food-list.tsx` for `/food-list`)
- Run `pnpm check-type` after scaffolding to verify route tree re-generates correctly
