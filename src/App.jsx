import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Agency from "./Pages/Agency"
import Work from "./Pages/Work"
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