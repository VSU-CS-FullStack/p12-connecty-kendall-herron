import React, { Component } from 'react';
// import axios from 'axios';
import classnames from 'classnames';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class Login extends Component {
    constructor(props){
		super(props);

		this.state = {
        email: "",
        password: "",
        error: {} // will be explained later
    	};

    	this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	componentWillReceiveProps(nextProps) {
            if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/landing");
        }

            if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/landing");
        }
    }

	onInputChange(e) {        
		// console.log(event.target.value);
		this.setState({ [e.target.name]: e.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();

    const newUser = {
        email: this.state.email,
        password: this.state.password
    };

    // axios
    //     .post("api/users/register", newUser)
    //     .then(res => this.props.history.push("/login"))
    //     .catch(err => this.setState({error: err.response.data}));

    this.props.loginUser(newUser, this.props.history);
	}

    render() {
    	const { error } = this.state;
    	return 	(
    		<div className="container">
            	<h1>Login</h1>
            	<div className="login">
				    <div className="container">
				      <div className="row">
				        <div className="col-md-8 m-auto">
				          <h1 className="display-4 text-center">Login</h1>
				          <p className="lead text-center">Login your Connecty account</p>
				          <form noValidate
    							onSubmit={this.onFormSubmit} action="create-profile.html">
				            <div className="form-group">

				            </div>
				            <div className="form-group">
				              	<input 
				              		type="email" 
				              		className={classnames("form-control form-control-lg", {'is-invalid': error.email})} 
				              		placeholder="Email Address" 
				              		name="email" 
				              		value={this.state.email}
        							onChange={this.onInputChange}
				              	/>
				              	{	
                                    error.email && (
                                        <div className="invalid-feedback">{error.email}</div>
                                    )
                                }
				              
				            </div>
				            <div className="form-group">
				              	<input 
				              		type="password" 
				              		className={classnames("form-control form-control-lg", {'is-invalid': error.password})} 
				              		placeholder="Password" 
				              		name="password"
				              		value={this.state.password}
        							onChange={this.onInputChange}
				              	/>
				              	{
                                    error.password && (
                                        <div className="invalid-feedback">{error.password}</div>
                                    )
                                }
				            </div>
				            <div className="form-group">

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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};



const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);