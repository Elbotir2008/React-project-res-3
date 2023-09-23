import Header from "./components/header/Header";
import Home from "./pages/home/Home.jsx";
import Company from "./pages/company/Company.jsx";
import Sliders from "./pages/sliders/Sliders.jsx";
import Products from "./pages/products/Products.jsx";
import Informations from "./pages/information/Information.jsx";
import Team from "./pages/team/Team.jsx";
import News from "./pages/news/News.jsx";
import Footer from "./components/footer/Footer.jsx";
import Backtop from "./components/backtop/Backtop";
import "./styles/global.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Company />
      <Sliders />
      <Products />
      <Informations />
      <Team />
      <News />
      <Footer />
      <Backtop />
    </div>
  );
}

export default App;
