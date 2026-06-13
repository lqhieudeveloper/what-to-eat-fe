# /add-mutation

Scaffold a new `useMutation` hook for a given resource + operation.

## Usage

```
/add-mutation <resource> <operation> [endpoint]
```

**Example:** `/add-mutation meal create /meals`

## Steps

1. **Identify or create service method** — check `src/services/<resource>.service.ts`. If the method doesn't exist, add a `static async` method that calls `axiosInstance` with POST/PATCH/DELETE.

2. **Create mutation hook** at `src/queries/mutation/<resource>.<operation>.mutation.ts`:

```ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { <Resource>Service } from '@/src/services/<resource>.service'

export function use<Resource><Operation>() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: <Resource>Service.<method>,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['<resource>', 'list'] })
    },
  })
}
```

3. **Re-export** from `src/queries/mutation/index.ts`.

4. **Create Zod schema** at `src/schema/<resource>.schema.ts` if needed for form validation:

```ts
import { z } from 'zod'

export const create<Resource>Schema = z.object({
  // fields...
})

export type Create<Resource>Input = z.infer<typeof create<Resource>Schema>
```

## Rules

- Always invalidate related `queryKey`s in `onSuccess`
- Mutation input types come from Zod schemas in `src/schema/`
- For optimistic updates, use `onMutate` + `onError` rollback pattern
- Hook name: `use<Resource><Operation>` (e.g., `useCreateMeal`, `useDeleteMeal`)
