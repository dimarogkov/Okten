import React, { Component } from "react";
import {withRouter} from "react-router";

class Post extends Component {
    render() {

        const {id, title, body} = this.props.post;

        return(
            <div>
                <div>{id}</div>
                <div>{title}</div>
                <div>{body}</div>
                <button onClick={() => {this.commentOpen(id)}}>Open Comment</button>
                <hr></hr>
            </div>
        )
    }

    commentOpen = (id) => {
        this.props.history.push({
            pathname: `/posts/${id}`
        })
    }
}

export default withRouter(Post);