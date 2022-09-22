import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/home/home";
import ScrollToTop from "./components/scrollToTopBtn/ScrollToTop";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <IntroSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
