import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import Index from './Components/Pages/Index'
import MainLayout from './Components/Layout/MainLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
