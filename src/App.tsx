import React, { useCallback, useState, useEffect } from 'react'
import logo from '@/assets/logo.svg'
import '@/assets/App.css'

interface Props {
  text: string
  action?(): any
}

function App({ text, action }: Props) {
  // consg
  const [number, setNumber] = useState(1)
  const [lorem, setLorem] = useState('3')

  const handleChange = useCallback(() => {
    setNumber((a) => {
      return a === 0 ? 1 : a * 2
    })
  }, [number])

  const getName = useCallback(
    (e: string) => {
      return `${e} number:${number} lorem:${lorem}`
    },
    [number, lorem]
  )

  const checkName = (e: any) => {
    setLorem(e.target.value)
  }

  useEffect(() => {
    console.log(number)
    // return console.log("unmount")
  }, []) // [number] <-- watch number

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={lorem} onChange={checkName} />
        <button type="button" onClick={handleChange}>
          {number} {getName(lorem)}
        </button>
        <button key="btnLorem" type="button" onClick={action} className="Lorem">
          Lorem ipsum dolor sit {text}
        </button>
      </header>
    </div>
  )
}

export default App
