import React, { Component } from 'react';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermSearch({ term });
	}

    render() {
        return (   	
        	// <input 
        		// value={this.state.term}
        		// onChange={ event => this.setState({ term: event.target.value })}/>
        		
	        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
	        <input onChange={ event => this.setState({ term: event.target.value })}/>
	    	<div className="container">
	      	<a className="navbar-brand" href="landing.html">Connecty</a>
	      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
	        <span className="navbar-toggler-icon"></span>
	      	</button>

	      	<div className="collapse navbar-collapse" id="mobile-nav">
	        <ul className="navbar-nav mr-auto">
	          <li className="nav-item">
	            <a className="nav-link" href="profiles.html"> Developers
	            </a>
	          </li>
	        </ul>

	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item">
	            <a className="nav-link" href="register.html">Sign Up</a>
	          </li>
	          <li className="nav-item">
	            <a className="nav-link" href="login.html">Login</a>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    }
}

export default NavBar;