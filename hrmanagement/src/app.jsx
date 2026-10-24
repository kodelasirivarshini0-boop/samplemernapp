import header from "./components/header"
import footer from "./components/footer"
import home from "./pages/home"
import about from "./pages/about"
import contact from "./pages/contact"
import{Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <header></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}


export default App