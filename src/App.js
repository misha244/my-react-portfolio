import { HashRouter as Router } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Routes from "./Routes";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router basename="/">
        <NavigationBar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
