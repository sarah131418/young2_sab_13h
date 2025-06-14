
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { NavBar } from './components/NavBar'

const App = () => (
  <Router>
    <div className="bg-[#ECEAE0] w-screen h-screen">
      <Navbar/>
    </div>
  </Router>
)

export default App
