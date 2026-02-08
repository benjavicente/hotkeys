import { createReactPlugin } from '@tanstack/devtools-utils/react'
import { KeysDevtoolsPanel } from './ReactKeysDevtools'

const [keysDevtoolsPlugin, keysDevtoolsNoOpPlugin] = createReactPlugin({
  name: 'TanStack Keys',
  Component: KeysDevtoolsPanel,
})

export { keysDevtoolsPlugin, keysDevtoolsNoOpPlugin }
