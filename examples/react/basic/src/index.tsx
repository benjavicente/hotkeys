import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTemplate } from '@tanstack/keys'
import { useTemplate } from '@tanstack/react-keys'

function App() {
  const keys = React.useMemo(
    () => createTemplate({ message: 'Hello from React!' }),
    [],
  )
  const state = useTemplate(keys)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TanStack Keys - React Basic Example</h1>
      <p>Message: {state.message}</p>
      <button onClick={() => keys.greet()}>Greet (check console)</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
