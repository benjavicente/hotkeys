import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTemplate } from '../src/useTemplate'
import { createTemplate } from '../../keys/dist'

describe('useTemplate', () => {
  it('should work', () => {
    const keys = createTemplate()
    const { result } = renderHook(() => useTemplate(keys))
    expect(result.current).toBeDefined()
    expect(result.current.message).toBe('Hello')
  })

  it('should work with custom message', () => {
    const keys = createTemplate({ message: 'Custom' })
    const { result } = renderHook(() => useTemplate(keys))
    expect(result.current.message).toBe('Custom')
  })
})
