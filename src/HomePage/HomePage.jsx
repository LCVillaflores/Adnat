import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Adnat</h1>
                <p>You're logged in as  {' '+user.firstName + ' ' + user.lastName+' '} <Link to="/login">Logout</Link></p>
                <h3>You aren't a member of any organization. Join an existing one or create a new one </h3>
        
            </div>
        );
    }
}

export { HomePage };