import "./App.css";

//COMPONENTS
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PerifericoPage from "./pages/PerifericoDetailPage/PerifericoDetailPage";
import PerifericoCategoryPage from "./pages/PerifericoCategoryPage/PerifericoCategoryPage";
import Cart from "./pages/CartPage/CartPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<PerifericoPage />} />
          <Route
            path="/periferico-category/:category"
            element={<PerifericoCategoryPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
