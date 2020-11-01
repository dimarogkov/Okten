import React, {Component} from 'react';
import { Services } from "../../services/services";
import User from "../user/user";

class UserList extends Component {
    api = new Services();
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