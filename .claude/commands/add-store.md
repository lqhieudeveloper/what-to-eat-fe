# /add-store

Scaffold a new Zustand store for client-only state.

## Usage

```
/add-store <name>
```

**Example:** `/add-store auth` → creates `src/stores/auth.store.ts`

## When to use

Only for **client state** not related to server data:

- Auth tokens / current user
- UI state (sidebar open, modal open, selected tab)
- Multi-step form state
- Optimistic UI state

**Do NOT** use Zustand for server data — that's TanStack Query.

## Steps

1. **Create store** at `src/stores/<name>.store.ts`:

```ts
import { create } from 'zustand'

type <Name>State = {
  // state fields
}

type <Name>Actions = {
  // action methods
}

export const use<Name>Store = create<<Name>State & <Name>Actions>()((set) => ({
  // initial state
  // actions
  reset: () => set({ /* initial state */ }),
}))
```

2. **Re-export** from `src/stores/index.ts`.

## Pattern

- Separate `State` and `Actions` types, combine in `create<>()`
- Always include a `reset` action
- Keep stores small and focused — one store per domain
- Persist to localStorage only when explicitly needed (use `zustand/middleware` `persist`)

## Auth Store Example

```ts
import { create } from 'zustand'

type AuthState = {
  accessToken: string | null
}

type AuthActions = {
  setToken: (token: string) => void
  clearToken: () => void
}

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  accessToken: localStorage.getItem('access_token'),
  setToken: (token) => {
    localStorage.setItem('access_token', token)
    set({ accessToken: token })
  },
  clearToken: () => {
    localStorage.removeItem('access_token')
    set({ accessToken: null })
  },
}))
```
