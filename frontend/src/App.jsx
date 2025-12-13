import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Add_cartpage from './Pages/Add_cartpage'
import DetailPage from './Pages/DetailPage'
import AboutPage from './Pages/AboutPage'
import ProductsPage from './Pages/ProductsPage'
import Navbar from './Components/Navbar'

function App() {
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Routes >
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/product/:id' element={<DetailPage/>}/>
          <Route path='/cart' element={<Add_cartpage/>}/>
          <Route path='/cart/:id' element={<Add_cartpage/>}/>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
