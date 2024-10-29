import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'

function App() {
  return (
    <div style={{
      display: "flex",
      gap: "5px"
    }}>
      <Card text='Hi!' size={20}/>
      <Card text='This!' size={10}/>
      <Card text='Is!' size={30}/>
      <Card text='React!' size={10}/>
      <Card text='Cool!' size={20}/>
      <Card text='Huh!' size={30}/>
    </div>
    
  )
}

export default App
