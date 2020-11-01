import React, {Component} from 'react';

class User extends Component {

    render() {
        const {id,name,username,email} = this.props.user;

        return(
            <div>
                {
                    <div>
                        <p>{id} - {name}</p>
                        <p>{username}</p>
                        <p>{email}</p><hr></hr>
                    </div>
                }
            </div>
        );
    }
}

export default User;