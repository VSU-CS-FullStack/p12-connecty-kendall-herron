import React, { component } from 'react';
import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";




class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;