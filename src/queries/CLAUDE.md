# Queries Layer

All server state lives here. Components **never** call services directly — they use hooks from this layer.

## Structure

```
src/queries/
  query/        # useQuery hooks (read)
  mutation/     # useMutation hooks (write)
```

## Query Key Convention

Use string arrays: `['resource', 'operation', ...params]`

```ts
// Good
queryKey: ['meals', 'list']
queryKey: ['meals', 'detail', id]

// Bad
queryKey: ['getMeals']
```

## useQuery Template

```ts
import { useQuery } from '@tanstack/react-query'
import { MealService } from '@/src/services/meal.service'

export function useMeals() {
  return useQuery({
    queryKey: ['meals', 'list'],
    queryFn: MealService.getAll,
  })
}
```

## useMutation Template

```ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MealService } from '@/src/services/meal.service'

export function useCreateMeal() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: MealService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meals', 'list'] })
    },
  })
}
```

## Rules

- Never use `useEffect` + `useState` for server data — always `useQuery`.
- Always invalidate related queries in `onSuccess` of mutations.
- Use `select` to transform/filter data inside `useQuery` rather than in components.
- Error and loading states come from `useQuery` return values — don't duplicate them.
