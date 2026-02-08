import { HotkeyManager } from '@tanstack/keys'
import { useStyles } from '../styles/use-styles'
import type { HotkeyRegistration } from '@tanstack/keys'

type ActionButtonsProps = {
  registration: HotkeyRegistration
}

export function ActionButtons(props: ActionButtonsProps) {
  const styles = useStyles()

  const handleTrigger = () => {
    const manager = HotkeyManager.getInstance()
    manager.triggerRegistration(props.registration.id)
  }

  return (
    <div class={styles().actionsRow}>
      <button class={styles().actionButton} onMouseDown={handleTrigger}>
        <span class={styles().actionDotGreen} />
        Trigger
      </button>
    </div>
  )
}
