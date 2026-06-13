# /add-query

Scaffold a new `useQuery` hook for a given resource + operation.

## Usage

```
/add-query <resource> <operation> [endpoint]
```

**Example:** `/add-query meal list /meals`

## Steps

1. **Identify or create service method** — check `src/services/<resource>.service.ts`. If the method doesn't exist, add a `static async` method that calls `axiosInstance` and maps the response.

2. **Create query hook** at `src/queries/query/<resource>.<operation>.query.ts`:

```ts
import { useQuery } from '@tanstack/react-query'
import { <Resource>Service } from '@/src/services/<resource>.service'

export function use<Resource><Operation>() {
  return useQuery({
    queryKey: ['<resource>', '<operation>'],
    queryFn: <Resource>Service.<method>,
  })
}
```

3. **Re-export** from `src/queries/query/index.ts`.

4. **Add type** to `src/types/<resource>.ts` if it doesn't exist — camelCase fields only.

## Query Key Pattern

`['resource', 'operation', ...params]`

- List: `['meals', 'list']`
- Detail: `['meals', 'detail', id]`
- Filtered: `['meals', 'list', { category }]`

## Rules

- Hook name: `use<Resource><Operation>` (e.g., `useMealList`, `useMealDetail`)
- Never call service methods directly in components
- Use `select` option for data transformation in components, not inside the hook
