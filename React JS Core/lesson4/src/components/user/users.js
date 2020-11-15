import React, { Component } from "react";
import {Service} from "../../services/service";
import User from "./user";

class Users extends Component {

    api = new Service();

    state = {
        users: []
    }

    componentDidMount() {
        this.api.getUsers()
            .then(res => res.json())
            .then(users => {
                this.setState({users})
            });
    }

    render() {
        return(
            <div>
                {
                    this.state.users.map(user => (
                        <User user={user} key={user.id}/>
                    ))
                }
            </div>
        );
    }
}

export default Users;