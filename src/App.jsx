import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MostPopular from './components/MostPopular';
import BagsCollection from './components/BagsCollection';
import BlazerParallax from './components/BlazerParallax';
import FashionParallax from './components/FashionParallax';
import ProductGird from './components/ProductGrid';
import Container from './components/Container';
import FeaturesSection from './components/FeaturesSection';
import LastSection from './components/LastSection';
import Footer from './components/Footer';
import ShopPage from './components/Shop';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductPage from "./components/ProductPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <div>
           <Header />
            <MostPopular/>
            <BagsCollection/>
            <BlazerParallax/>
            <FashionParallax/>
            <ProductGird/>
            <Container/>
            <FeaturesSection/>
            <LastSection/>
            <Footer/>
          </div>
        } />
        
        {/* Shop Page Route */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
                {/* NEW: Product Detail Route (Dynamic) */}
                <Route path="/product/:id" element={<ProductPage />} />
      
       
      </Routes>
    </Router>
  );
}

export default App;