---
title: Devtools
id: devtools
---

TanStack Hotkeys provides devtools for debugging and monitoring all your registered hotkeys in real-time. The devtools integrate seamlessly within the [TanStack Devtools](https://tanstack.com/devtools) multi-panel UI.

> [!NOTE]
> By default, the TanStack Devtools and TanStack Hotkeys Devtools will only be included in development mode. This helps keep your production bundle size minimal. If you need to include devtools in production builds (e.g., for debugging production issues), you can use the alternative "production" imports.

## Features

The Hotkeys devtools panel provides:

- **Registered Hotkeys List** - View all currently registered hotkeys with their options and status
- **Held Keys Display** - See which keys are currently being held down in real-time
- **Trigger Hotkeys** - Programmatically trigger hotkey callbacks for testing without pressing keys
- **Registration Details** - Inspect individual hotkey registrations including their target, event type, and conflict behavior

## Installation

Install the devtools packages for your framework:

### React

```sh
npm install @tanstack/react-devtools @tanstack/react-hotkeys-devtools
```

## Setup

### React Setup

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools'
import { hotkeysDevtoolsPlugin } from '@tanstack/react-hotkeys-devtools'

function App() {
  return (
    <div>
      {/* Your app content */}

      <TanStackDevtools
        plugins={[hotkeysDevtoolsPlugin()]}
      />
    </div>
  )
}
```

The devtools panel will appear as a tab in the TanStack Devtools UI, alongside any other TanStack devtools plugins you may have installed (e.g., Query devtools, Pacer devtools).

## Production Builds

By default, devtools are excluded from production builds to minimize bundle size. The default imports will return no-op implementations in production:

```tsx
// This will be a no-op in production builds
import { hotkeysDevtoolsPlugin } from '@tanstack/react-hotkeys-devtools'
```

If you need to include devtools in production builds (e.g., for debugging production issues), use the production-specific imports:

```tsx
// This will include full devtools even in production builds
import { hotkeysDevtoolsPlugin } from '@tanstack/react-hotkeys-devtools/production'
```
