import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import HeroPage from "./components/Hero/HeroPage";
import Cards from "./components/Card/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
