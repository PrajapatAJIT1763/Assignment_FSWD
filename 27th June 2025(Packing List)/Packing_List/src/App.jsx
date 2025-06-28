import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PackingList from './PackingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Packing List</h1>
        <PackingList />
      </div>
    </>
  )
}

export default App
