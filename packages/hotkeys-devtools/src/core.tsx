import { constructCoreClass } from '@tanstack/devtools-utils/solid'
import { lazy } from 'solid-js'

const Component = lazy(() => import('./HotkeysDevtools'))

export interface HotkeysDevtoolsInit {}

const [HotkeysDevtoolsCore, HotkeysDevtoolsCoreNoOp] =
  constructCoreClass(Component)

export { HotkeysDevtoolsCore, HotkeysDevtoolsCoreNoOp }
