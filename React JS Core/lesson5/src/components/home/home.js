import React, { Component } from "react";
import { MyProveder } from "../../context/context";
import { Service } from "../../service/service";
import Users from "../users/users";

class Home extends Component {

    api = new Service();

    state = {
        users: []
    }

    componentDidMount() {
        this.api.getUsers()
            .then(res => res.json())
            .then (users => {
                this.setState({users});
            })
    }

    render() {
        return(
            <div>
                <MyProveder value="dima">
                    <Users/>
                </MyProveder>
            </div>
        )
    }
}

export default Home;