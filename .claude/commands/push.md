# Push

Push the current branch to origin.

**Usage:** `/push`

## Steps

1. Run `git branch --show-current` to get the current branch name.
2. **Guard**: if the branch is `main`, `master`, or `dev` — **stop immediately** and tell the user:
   > "Direct push to `<branch>` is not allowed. Please create a feature branch and push from there."
   > Do not proceed further.
3. Run `git status` to check for uncommitted changes. If there are any, warn the user and ask whether to commit first (suggest running `/commit`).
4. Run `git push origin <current-branch>`.
5. If the remote branch does not exist yet, run `git push --set-upstream origin <current-branch>`.

## Rules

- **Never** push to `main`, `master`, or `dev` — hard stop.
- Never use `--force` or `--force-with-lease` unless the user explicitly asks and confirms they understand the consequences.
- Never push with `--no-verify`.
- After a successful push, print the branch name and remind the user to open a Pull Request if this is a feature branch.
