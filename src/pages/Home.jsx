import ButtonGradient from "../assets/svg/ButtonGradient";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <div className="[pt-4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Features />
        <About />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
