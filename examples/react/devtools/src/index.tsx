import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTemplate } from '@tanstack/keys'
import { useTemplate } from '@tanstack/react-keys'
import { TemplateDevtools } from '@tanstack/react-keys-devtools'

function App() {
  const keys = React.useMemo(
    () => createTemplate({ message: 'Hello from React with Devtools!' }),
    [],
  )
  const state = useTemplate(keys)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TanStack Keys - React Devtools Example</h1>
      <p>Message: {state.message}</p>
      <button onClick={() => keys.greet()}>Greet (check console)</button>

      <hr style={{ margin: '20px 0' }} />

      <h2>Devtools:</h2>
      <TemplateDevtools />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
