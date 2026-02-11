import { createReactPanel } from '@tanstack/devtools-utils/react'
import { HotkeysDevtoolsCore } from '@tanstack/hotkeys-devtools'
import type { DevtoolsPanelProps } from '@tanstack/devtools-utils/react'

export interface HotkeysDevtoolsReactInit extends DevtoolsPanelProps {}

const [HotkeysDevtoolsPanel, HotkeysDevtoolsPanelNoOp] =
  createReactPanel(HotkeysDevtoolsCore)

export { HotkeysDevtoolsPanel, HotkeysDevtoolsPanelNoOp }
