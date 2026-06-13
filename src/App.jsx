import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Agency from "./Pages/Agency.jsx"
import Work from "./Pages/Work.jsx"
import Navbar from './Components/Navigation/Navbar.jsx'
import FullScreenNav from "./Components/Navigation/FullScreenNav.jsx"
import Contacts from "./Pages/Contacts.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agency" element={<Agency />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App