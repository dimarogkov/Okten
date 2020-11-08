import React, { Component } from "react";
import { Services } from "../services/services";

class User extends Component {

    state = {
        users: [],
        usersFilterID: [],
        usersFilterName: [],
        activeId: false,
        activeName: false
    }

    api = new Services();

    render() {
        return(
            <div>
                <form onSubmit={this.sendFormId}>
                    <label>ID Users</label><br></br>
                    <input type="number" placeholder="User ID" onChange={this.changeFormId} /> 
                </form>
                <div>
                    {
                        this.state.activeId && (
                            this.state.usersFilterID.map( user => {
                                return (
                                    <div className="card" key={user.id}>
                                        <div className="card-body">
                                            <h4 className="card-title">{user.id} {user.name}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                                            <p className="card-text">{user.email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                <hr></hr>
                <form onSubmit={this.sendFormName}>
                    <label>Name Users</label><br></br>
                    <input type="text" placeholder="Name User" onChange={this.changeFormName} /> 
                </form>
                <div>
                    {
                        this.state.activeName && (
                            this.state.usersFilterName.map( user => {
                                return (
                                    <div className="card" key={user.id}>
                                        <div className="card-body">
                                            <h4 className="card-title">{user.id} {user.name}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                                            <p className="card-text">{user.email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        )
    }

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    sendFormId = (event) => {
        event.preventDefault();
    }
    sendFormName = (event) => {
        event.preventDefault();
    }

    changeFormId = (event) => {
        const users = this.state.users;
        if (event.target.value<=10) {
            const resID = users.filter(user => {
                return user.id === +event.target.value;
            });
            this.setState({usersFilterID: resID, activeId: true});
        } else {
            this.setState({activeId: false});
        }
    }
    changeFormName = (event) => {
        const users = this.state.users;
        if (event.target.value) {
            const resName = users.filter(user => {
                return user.name.toLowerCase().includes(event.target.value.toLowerCase());
            });
            this.setState({usersFilterName: resName, activeName: true});
        } else {
            this.setState({activeName: false});
        }
    }
}

export default User;