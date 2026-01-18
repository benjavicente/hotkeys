import { onMount } from 'solid-js'
import { useStore } from '@tanstack/solid-store'
import { Keys } from '../../keys/dist'

export function createTemplateSignal(keys: Keys) {
  console.log('Hello from @tanstack/solid-keys!')
  const state = useStore(keys.store)

  onMount(() => {
    console.log('Keys signal mounted')
  })

  return state
}
