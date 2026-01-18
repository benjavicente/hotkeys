import { render } from 'solid-js/web'
import { createTemplate } from '@tanstack/keys'
import { createTemplateSignal } from '@tanstack/solid-keys'

function App() {
  const keys = createTemplate({ message: 'Hello from Solid!' })
  const state = createTemplateSignal(keys)

  return (
    <div style={{ padding: '20px', 'font-family': 'sans-serif' }}>
      <h1>TanStack Keys - Solid Basic Example</h1>
      <p>Message: {state().message}</p>
      <button onClick={() => keys.greet()}>Greet (check console)</button>
    </div>
  )
}

render(() => <App />, document.getElementById('root')!)
