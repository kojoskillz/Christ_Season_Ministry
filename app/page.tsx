import '../app/globals.css';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import SermonsSection from './Components/Sermons/Sermon';
import Footer from './Components/Footer/Footer';




export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <SermonsSection />
      <Footer />
    </>
  );
}
