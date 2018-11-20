import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class Register extends React.Component {
	constructor(props){
		super(props);

		this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        error: {} // will be explained later
    	};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {        
		// console.log(event.target.value);
		this.setState({ [e.target.name]: e.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();

    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
    };

    axios
        .post("api/users/register", newUser)
        .then(res => this.props.history.push("/login"))
        .catch(err => this.setState({error: err.response.data}));
}

    render() {
    	const { error } = this.state;
    	return 	(
    		<div className="container">
            	<h1>Register</h1>
            	<div className="register">
				    <div className="container">
				      <div className="row">
				        <div className="col-md-8 m-auto">
				          <h1 className="display-4 text-center">Sign Up</h1>
				          <p className="lead text-center">Create your Connecty account</p>
				          <form noValidate
    							onSubmit={this.onFormSubmit} action="create-profile.html">
				            <div className="form-group">
				              	<input 
				              		type="text" 
				              		className={classnames("form-control form-control-lg", {'is-invalid': error.name})}
				              		placeholder="Name" 
				              		name="name" 
				              		value={this.state.name}
    								onChange={this.onInputChange} 
    							/>
    							{
                                    error.name && (
                                        <div className="invalid-feedback">{error.name}</div>
                                    )
                                }
				            </div>
				            <div className="form-group">
				              	<input 
				              		type="email" 
				              		className={classnames("form-control form-control-lg", {'is-invalid': error.name})} 
				              		placeholder="Email Address" 
				              		name="email" 
				              		value={this.state.name}
        							onChange={this.onInputChange}
				              	/>
				              	{	
                                    error.name && (
                                        <div className="invalid-feedback">{error.name}</div>
                                    )
                                }
				              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
				            </div>
				            <div className="form-group">
				              	<input 
				              		type="password" 
				              		className={classnames("form-control form-control-lg", {'is-invalid': error.name})} 
				              		placeholder="Password" 
				              		name="password"
				              		value={this.state.name}
        							onChange={this.onInputChange}
				              	/>
				              	{
                                    error.name && (
                                        <div className="invalid-feedback">{error.name}</div>
                                    )
                                }
				            </div>
				            <div className="form-group">
				              	<input 
				              		type="password" 
				              		className={classnames("form-control form-control-lg", {'is-invalid': error.name})}
				              		placeholder="Confirm Password" 
				              		name="password2" 
				              		value={this.state.name}
        							onChange={this.onInputChange}
				              	/>
				              	{
                              		error.name && (
                                        <div className="invalid-feedback">{error.name}</div>
                                    )
                                }
				            </div>
				            <input type="submit" className="btn btn-info btn-block mt-4" />
				          </form>
				        </div>
				      </div>
				    </div>
				  </div>
        	</div>		  
    			
 		);
    }
}

export default Register;