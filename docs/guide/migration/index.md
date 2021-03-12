# Migration

The `@leanup stack` is maximally decoupled, so we can proceed quickly and with only tiny changes.

## Migrate from 1.1 to 1.2

### Changes

1. ✨ ...

### Migrate

Follow the steps below to update the stack.

#### Fetch changes

```bash
> git checkout -b chore/update-leanup-stack-to-v1.2
> npm i -D @leanup/cli@^1.2 @leanup/cli-<framework>@^1.2
> npx <framework> create --only-config --no-install --overwrite
```

Available Frameworks: `angular`, `angularjs`, `inferno`, `lit-element`, `preact`, `react`,`svelte`,`vanilla`,`vue` and `vue3`

#### Clearing changes

After the changes have been fetched, the changed files must be reviewed. Some changes can then be corrected again.
