import React, { Component } from "react";
import {withRouter} from "react-router";

class Comment extends Component {
    render() {

        const comment = this.props.comment

        return(
            <div>
                <div>
                    <div>{comment.id}</div>
                    <div>{comment.name}</div>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                    <hr></hr>
                </div>
            </div>
        ) 
    }
}

export default withRouter(Comment);