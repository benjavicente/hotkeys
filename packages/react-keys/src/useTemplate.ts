import { useEffect } from 'react'
import { useStore } from '@tanstack/react-store'
import { Keys } from '../../keys/dist'

export function useTemplate(keys: Keys) {
  console.log('Hello from @tanstack/react-keys!')
  const state = useStore(keys.store)

  useEffect(() => {
    console.log('Keys hook mounted')
  }, [])

  return state
}
