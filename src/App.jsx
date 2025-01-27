
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

function App() {
  return (
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
  );
}

export default App;