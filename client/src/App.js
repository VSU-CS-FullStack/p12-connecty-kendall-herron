import React, { component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./components/landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/register";




class App extends Component {
 render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                    	<Route path="/register" component={Register} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;