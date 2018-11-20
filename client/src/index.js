//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/Navbar';
import React, { Component } from "react";

class App extends Component {
	constructor(props){

	
	    return (
	        <div>
	            <NavBar />
	        </div>
	    );
	}
};

ReactDOM.render(<App />, document.getElementById('root'));
