# Add shadcn Component

Add a shadcn component and structure it correctly for this project.

**Usage:** `/add-shadcn <component-name>`

## Steps

1. Run: `echo y | pnpm dlx shadcn@latest add $ARGUMENTS`
2. The CLI will create files in a wrong `@/` directory at the project root (Windows bug).
3. For each `.tsx` file created in `@/ui/`:
   - Create directory `src/ui/<name>/`
   - Move `@/ui/<name>.tsx` → `src/ui/<name>/<name>.tsx`
   - Create `src/ui/<name>/index.ts` with content: `export * from './<name>'`
4. If `@/hooks/` has any files, move them to `src/hooks/`.
5. Delete the `@/` directory.
6. Run `pnpm check-type` to verify no type errors.
7. Run `pnpm lint` to verify no lint errors.

## Notes

- Do not edit the generated component files — they are shadcn primitives.
- The `src/ui/<name>/index.ts` re-export allows cross-component imports like `from '@/ui/button'` to resolve correctly.
