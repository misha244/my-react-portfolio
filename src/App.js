import { HashRouter as Router } from "react-router-dom";

import Routes from "./Routes";

import NavigationBar from "./components/NavigationBar";

import "./App.css";

const App = () => {
  return (
    <Router basename="/">
      <NavigationBar />
      <Routes />
    </Router>
  );
};

export default App;
