# Memory Guidelines

Rules for reading and writing persistent memory across conversations. Memory files live at:
`~/.claude/projects/<project-slug>/memory/`

---

## Memory Types

| Type        | When to save                                               | File name pattern     |
| ----------- | ---------------------------------------------------------- | --------------------- |
| `user`      | Learn something about the user's role, skills, preferences | `user-*.md`           |
| `feedback`  | User corrects a mistake or confirms a non-obvious approach | `feedback-<topic>.md` |
| `project`   | Decisions, goals, deadlines, architectural choices         | `project-*.md`        |
| `reference` | Pointers to external systems (Linear, Slack, dashboards)   | `reference-*.md`      |

---

## Feedback Memory (Most Important)

Save a `feedback` memory **immediately** whenever the user:

- Corrects a mistake Claude made
- Rejects an approach with an explanation
- Confirms an unusual choice worked ("yes exactly", "perfect, keep doing that")

**File:** `~/.claude/projects/.../memory/feedback-<topic>.md`

**Format:**

```markdown
---
name: feedback-<topic>
description: <one-line summary of the rule>
metadata:
  type: feedback
---

Rule: <what to avoid or always do>

**Why:** <reason the user gave — often a past incident or strong preference>

**How to apply:** <when/where this guidance kicks in>
```

**Example:**

```markdown
---
name: feedback-no-vitest-outside-ui
description: Never create test files outside src/ui/ — project scope is UI-only
metadata:
  type: feedback
---

Rule: Do not create test files outside src/ui/.

**Why:** User explicitly scoped tests to shadcn components only. Business logic tests add overhead with no value at this stage.

**How to apply:** Any time a task involves creating test files, check whether the file is inside src/ui/. If not, skip the test.
```

---

## What NOT to Save

- Code patterns or conventions — already in CLAUDE.md
- File paths or architecture — derivable from the codebase
- In-progress work or current task state — use tasks instead
- Git history or recent changes — use `git log`
- Anything already in CLAUDE.md or ANTI_PATTERNS.md

---

## Updating MEMORY.md Index

After writing any new memory file, add a one-line entry to `MEMORY.md`:

```
- [Title](file.md) — one-line hook describing what it contains
```
