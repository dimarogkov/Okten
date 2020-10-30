import React, {Component} from 'react';
import './user.css';

class User extends Component {

    submit = (user) => {
        user.status = !user.status
        this.setState({status: !this.props.user.status}) 
    }
     
    render(){
        let {user} = this.props;

        return(
            <div>
                {
                    user.status ? (
                        <div>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.status.toString()}</p>
                            <button onClick={() => this.submit(user)}>CLICK</button>
                            <hr></hr>
                        </div>
                    ): 
                    (
                        <div>
                            <p className="red">{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.status.toString()}</p>
                            <button onClick={() => this.submit(user)}>CLICK</button>
                            <hr></hr>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default User;