import React, { Component } from "react";
import {Service} from "../../services/service"
import Comment from "./comment";

class Comments extends Component {

    api = new Service();

    state = {
        comments: []
    }

    componentDidUpdate() {
        this.api.getComments()
            .then(res => res.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        return(
            <div>
                {
                    this.state.comments.map(comment => (
                            <Comment comment={comment} key={comment.id}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Comments;