import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Comp } from './components/comp'



function App() {
  const [strdata, setStrData] = useState<{ inp: string; sel: string }>({
    inp: 'Hia',
    sel: 'hello'
  })

  function handlechange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target
    // setStrData({
    //   [name]: value
    // })
    setStrData(prevStrData => {
      return {
        ...prevStrData,
        [name]: value
      }
    })
  }

  return (
    <>
      <input name='inp' value={strdata.inp} onChange={handlechange} type="text" />
      <select value={strdata.sel } onChange={handlechange} name="sel" id="">
        <option value="hi">hi</option>
        <option value="hello">hello</option>
      </select>
      <p>{strdata.inp}</p>
      <p>{strdata.sel}</p>
      <Comp this='hello'>
        <div>idk</div>
      </Comp>
    </>
  )
}

export default App
