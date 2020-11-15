import React, { Component } from "react";
import {withRouter} from "react-router";

class User extends Component {
    render() {

        const {id, name, username, email} = this.props.user;

        return(
            <div>
                <div>{id}</div>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <button onClick={() => {this.postOpen(id)}}>Open Post</button>
                <hr></hr>
            </div>
        )
    }

    postOpen = (id) => {
        this.props.history.push({
            pathname: `/users/${id}`
        })
    }
}

export default withRouter(User);