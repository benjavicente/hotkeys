import { HotkeysContextProvider } from './HotkeysContextProvider'
import { Shell } from './components/Shell'

export default function HotkeysDevtools() {
  return (
    <HotkeysContextProvider>
      <Shell />
    </HotkeysContextProvider>
  )
}
