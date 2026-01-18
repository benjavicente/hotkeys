import { describe, it, expect } from 'vitest'
import { Keys, createTemplate } from '../src/hello'

describe('Keys', () => {
  it('should create instance', () => {
    const keys = new Keys()
    expect(keys).toBeInstanceOf(Keys)
  })

  it('should create with helper', () => {
    const keys = createTemplate()
    expect(keys).toBeInstanceOf(Keys)
  })

  it('should use custom message', () => {
    const keys = createTemplate({ message: 'Custom' })
    expect(keys.store.state.message).toBe('Custom')
  })
})
