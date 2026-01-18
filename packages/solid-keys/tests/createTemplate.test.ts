import { describe, it, expect } from 'vitest'
import { createTemplate } from '../../keys/dist'

describe('createTemplateSignal', () => {
  it('should work with keys', () => {
    const keys = createTemplate()
    expect(keys).toBeDefined()
    expect(keys.store.state.message).toBe('Hello')
  })
})
