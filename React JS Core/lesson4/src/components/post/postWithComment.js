import React, { Component } from "react";
import {Service} from "../../services/service";

class PostWithComment extends Component {

    api = new Service();

    state = {
        comments: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.api.getCommentsWithId(id)
            .then(res => res.json())
            .then(comments => {
                this.setState({comments})
            })

    }

    render() {
        return(
            <div>
                {
                    this.state.comments && (
                        this.state.comments.map(comment => (
                            <div key={comment.id}>
                                <div>{comment.id}</div>
                                <div>{comment.name}</div>
                                <div>{comment.email}</div>
                                <div>{comment.body}</div>
                                <hr></hr>
                            </div>
                        ))
                    )
                }
            </div>
        );
    }
}

export default PostWithComment;