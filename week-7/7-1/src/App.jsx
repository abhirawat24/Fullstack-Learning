import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
import './App.css'

function App() {
 
  return (
    <div>
      
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar() {
   const navigate = useNavigate();
   return (
    <div>
      
        <button onClick={() => {
          navigate('/dashboard');
        }}>Go to Dashboard</button>
        <button onClick={() => {
          navigate('/');
        }}>Go to Landing</button>
    </div>
  )
}

export default App
