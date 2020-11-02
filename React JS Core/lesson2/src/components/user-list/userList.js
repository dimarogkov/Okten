import React, {Component} from 'react';
import User from "../user/user";
import {UserServices} from '../../services/userService'

class UserList extends Component {
    api = new UserServices();
    state = { users: [] }

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
     }

    render() {
        return(
            <div> 
                <h2>Users</h2>
                {   
                    this.state.users.map( value => 
                        (
                            <User user={value} key={value.id}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default UserList;