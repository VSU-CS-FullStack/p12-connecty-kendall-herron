import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import store from "./store";


class App extends Component {
 render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Navbar />
                        <Switch>
                        	<Route path="/register" component={Register} />
                        	<Route path="/landing" component={Landing} />
                        	<Route path="/login" component={Login} />
                            <Route exact path="/" component={Landing} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;