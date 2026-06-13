# Services Layer

Services are the **only** place that communicates with the backend via `axiosInstance`.

## Rules

- All methods are `static async`.
- Import `axiosInstance` from `@/src/axios/index`.
- **Single mapping boundary**: convert snake_case → camelCase here. Never pass raw API shapes to components.
- Return typed domain objects (from `@/src/types/`), never raw `AxiosResponse`.
- Do not throw — let errors propagate to TanStack Query's `onError`.

## File Structure

```
src/services/
  [resource].service.ts   # e.g. meal.service.ts
  index.ts                # re-export all services
```

## Template

```ts
import { axiosInstance } from '@/src/axios/index'
import type { Meal } from '@/src/types/meal'

type MealApiResponse = {
  id: number
  name: string
  created_at: string
}

export class MealService {
  static async getAll(): Promise<Meal[]> {
    const { data } = await axiosInstance.get<MealApiResponse[]>('/meals')
    return data.map(MealService.toMeal)
  }

  private static toMeal(raw: MealApiResponse): Meal {
    return {
      id: raw.id,
      name: raw.name,
      createdAt: new Date(raw.created_at),
    }
  }
}
```
