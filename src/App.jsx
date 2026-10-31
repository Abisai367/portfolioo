import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home.jsx';
import Skills from './skills.jsx'
import Contact from './contact.jsx'
import Projects from './project.jsx'
import HireMe from './Hireme.jsx'
import NotFound from './error.jsx'

function App() {
  return (
<>
<Router>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/hire' element={<HireMe/>}/>
      <Route path='*' element={<NotFound/>}/>
  </Routes>
</Router>
</>
)}

export default App;
