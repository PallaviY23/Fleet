import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <main>
    <App />
    <Signup />
  </main>
)
