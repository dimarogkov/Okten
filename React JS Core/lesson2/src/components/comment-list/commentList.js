import React, { Component } from "react";
import {CommentServices} from '../../services/commentServices'
import Comment from "../comment/comment";

class CommentList extends Component {
    api = new CommentServices();
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