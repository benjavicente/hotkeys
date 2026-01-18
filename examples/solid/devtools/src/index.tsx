import { render } from 'solid-js/web'
import { createTemplate } from '@tanstack/keys'
import { createTemplateSignal } from '@tanstack/solid-keys'
import { TemplateDevtools } from '@tanstack/solid-keys-devtools'

function App() {
  const keys = createTemplate({
    message: 'Hello from Solid with Devtools!',
  })
  const state = createTemplateSignal(keys)

  return (
    <div style={{ padding: '20px', 'font-family': 'sans-serif' }}>
      <h1>TanStack Keys - Solid Devtools Example</h1>
      <p>Message: {state().message}</p>
      <button onClick={() => keys.greet()}>Greet (check console)</button>

      <hr style={{ margin: '20px 0' }} />

      <h2>Devtools:</h2>
      <TemplateDevtools />
    </div>
  )
}

render(() => <App />, document.getElementById('root')!)
