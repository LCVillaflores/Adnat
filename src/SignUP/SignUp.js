import React from 'react';

import { userService } from '../_services';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
     
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
			
              <div className="FormField">
                <label className="FormField__Label" htmlFor="fname">First Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter First name" name="fname" value={this.state.name} onChange={this.handleChange} />
              </div>
			  
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="lname">Last Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter Last name" name="lname" value={this.state.name} onChange={this.handleChange} />
              </div>
			  
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
			  
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

           

            
            </form>
          </div>
        );
    }
}
export { SignUP };