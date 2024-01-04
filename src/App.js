import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Employe from "./components/employers/Employe";
import Industry from "./components/industry/Industry";
import Locate from "./components/locate/Locate";
import Work from "./components/works/Work";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Banner />
      <Work />
      <Industry />
      <Employe />
      <Locate />
      <Footer />
    </div>
  );
}

export default App;
