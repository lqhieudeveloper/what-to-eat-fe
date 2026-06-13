# Commit

Stage all changes and create a Conventional Commit.

**Usage:** `/commit` or `/commit <hint>`

## Steps

1. Run `git status` to see what changed.
2. Run `git diff HEAD` to read the actual diff.
3. Analyze the diff and determine:
   - **type**: `feat` | `fix` | `refactor` | `chore` | `docs` | `style` | `test` | `perf` | `ci`
   - **scope**: the area affected (e.g. `auth`, `food-list`, `ui`, `axios`) — use kebab-case, keep it short
   - **description**: one concise sentence in imperative mood (English), lowercase, no trailing period
4. Run `git add .`
5. Run `git commit -m "<type>(<scope>): <description>"`

## Conventional Commit Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Reference: https://www.conventionalcommits.org/en/v1.0.0/

### Type Guide

| Type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | New feature or behaviour visible to users               |
| `fix`      | Bug fix                                                 |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `chore`    | Tooling, deps, config, build scripts                    |
| `docs`     | Documentation only                                      |
| `style`    | Formatting, whitespace — no logic change                |
| `test`     | Adding or updating tests                                |
| `perf`     | Performance improvement                                 |
| `ci`       | CI/CD pipeline changes                                  |

### Examples

```
feat(food-list): add pagination to food list query
fix(auth): handle expired token in axios interceptor
refactor(homepage): extract hero section into separate component
chore(deps): upgrade tanstack query to v5.101
test(ui): add button component unit tests
```

## Rules

- Never use vague messages like `update`, `fix bug`, `wip`, `changes`
- If the diff spans multiple unrelated concerns, mention each in the body
- The pre-commit hook will run automatically (`lint-staged → check-type → test:run`) — if it fails, abort and report the error to the user
- Never use `--no-verify`
