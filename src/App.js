//import logo from "./logo.svg";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Project />
      <Footer />
    </div>
  );
};
//<header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
//  <p>
//    Edit <code>src/App.js</code> and save to reload.
//  </p>
//  <a
//    className="App-link"
//    href="https://reactjs.org"
//    target="_blank"
//    rel="noopener noreferrer"
//  >
//    Learn React
//  </a>
//</header>;
export default App;
