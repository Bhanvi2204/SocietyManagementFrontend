import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Openings from './pages/Openings'
import Coordinators from './pages/Coordinators'
import Testimonials from './pages/Testimonials'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='font-mono transition-colors duration-300'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<Openings />} />
          <Route path='/coordinators' element={<Coordinators />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
