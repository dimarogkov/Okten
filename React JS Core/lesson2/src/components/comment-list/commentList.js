import React, { Component } from "react";
import { Services } from "../../services/services";
import Comment from "../comment/comment";

class CommentList extends Component {
    api = new Services();
    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getComments()});
    }

    render() {
        return(
            <div>
                <h2>Comments</h2>
                {
                    this.state.comments.map( value => (
                            <Comment comment={value} key={value.id}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default CommentList;