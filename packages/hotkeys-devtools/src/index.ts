'use client'

import * as Devtools from './core'

export const HotkeysDevtoolsCore =
  process.env.NODE_ENV !== 'development'
    ? Devtools.HotkeysDevtoolsCoreNoOp
    : Devtools.HotkeysDevtoolsCore

export type { HotkeysDevtoolsInit } from './core'
