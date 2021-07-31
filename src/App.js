import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Header />
        <Routes />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
