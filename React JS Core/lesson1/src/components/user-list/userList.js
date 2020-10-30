import React, {Component} from 'react';
import { users } from '../../data/data';
import User from '../user/user';

class UserList extends Component {
    render() {
        return (
            <div> 
                {
                    users.map((value) => {
                        return(
                            <div key={value.id}>
                                <User user ={value} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default UserList;