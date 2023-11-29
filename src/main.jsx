import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import img from "./assets/logos.png"
import  {Canvas} from "@react-three/fiber"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
      </header>
    <Canvas>
    <App />
    </Canvas>
  </React.StrictMode>,
)
