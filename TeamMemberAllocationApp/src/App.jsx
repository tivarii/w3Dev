import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import './App.css'
import { DataProvider } from './components/contexts/DataContext'
import Nav from './components/Nav'
import Header from './components/Header'
import Employees from './components/Employees'
import GroupedTeamMembers from './components/GroupedTeamMembers'
function App() {
  

  return (
    <DataProvider>
      <Router>
        <Nav/>
        <Header/>
        <Routes>
          <Route path="/" element={<Employees/>}></Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}>
          </Route>
        </Routes>
      </Router>
    </DataProvider>
    // <Nav></Nav>
  )
}

export default App
