import { createReactPlugin } from '@tanstack/devtools-utils/react'
import { HotkeysDevtoolsPanel } from './ReactHotkeysDevtools'

const [hotkeysDevtoolsPlugin, hotkeysDevtoolsNoOpPlugin] = createReactPlugin({
  name: 'TanStack Hotkeys',
  Component: HotkeysDevtoolsPanel,
})

export { hotkeysDevtoolsPlugin, hotkeysDevtoolsNoOpPlugin }
