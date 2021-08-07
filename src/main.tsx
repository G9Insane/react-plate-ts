import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/index.css'
import App from '@/App'

ReactDOM.render(
  <React.StrictMode>
    <App text="Jancuk" action={() => console.log(1)} />
  </React.StrictMode>,
  document.getElementById('root')
)
