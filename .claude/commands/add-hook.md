# /add-hook

Scaffold a custom React hook for reusable UI or derived state logic.

## Usage

```
/add-hook <name> [description]
```

**Example:** `/add-hook use-food-filter "filter meals by category and tag"`

## When to use

For **UI/derived state** logic that:

- Is reused across 2+ components
- Combines multiple pieces of state/refs
- Wraps browser APIs (IntersectionObserver, ResizeObserver, etc.)
- Is too complex to inline in a component

**Do NOT** use for server data — that's `useQuery`. **Do NOT** use for cross-component state — that's Zustand.

## Steps

1. **Create hook** at `src/hooks/<name>.ts`:

```ts
import { useState, useCallback } from 'react'

type Use<Name>Options = {
  // options
}

type Use<Name>Return = {
  // return values
}

export function <hookName>(options?: Use<Name>Options): Use<Name>Return {
  // implementation
}
```

2. **Re-export** from `src/hooks/index.ts`.

## Rules

- File name and export name must match: `use-food-filter.ts` → `export function useFoodFilter`
- Return an object (not an array) unless it's a simple [value, setter] pair
- Type the options and return value explicitly — no inferred return types
- Keep hooks pure — no side effects on mount unless using `useEffect` explicitly
