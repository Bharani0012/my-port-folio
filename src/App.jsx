import ThreeBackground from './components/ThreeBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HorizontalScroll from './components/HorizontalScroll.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <HorizontalScroll />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
