import Container from "./components/Container"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import Property from "./pages/property/Property"
import Contact from "./pages/contact/Contact"

function App() {


  return (
    <>

    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contact" element={<Property/>} />
        <Route path="/property" element={<Contact/>} />
      </Routes>
    </main>
    <Footer />

    
    {/* <Container>
    <div className= "text-4xl "></div>
     <h1 className="h1 "> hello world </h1>

     

     <h1 className="subheading "> hello world </h1>

     <h1 className="subheadingTwo"> hello world </h1>
     <h1 className="heading "> hello world </h1>
     <h1 className="headingTwo"> hello world </h1>
     <h1 className=""> hello world </h1>
    </Container> */}
     
    </>
  )
}

export default App
