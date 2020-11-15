import React, { Component } from "react";
import {Service} from "../../services/service";

class UserWithPost extends Component {

    api = new Service();

    state = {
        posts: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.api.getPostsWithId(id)
            .then(res => res.json())
            .then(posts => {
                this.setState({posts})
            })

    }

    render() {
        return(
            <div>
                {
                    this.state.posts && (
                        this.state.posts.map(post => (
                            <div key={post.id}>
                                <div>{post.id}</div>
                                <div>{post.title}</div>
                                <div>{post.body}</div>
                                <hr></hr>
                            </div>
                        ))
                    )
                }
            </div>
        );
    }
}

export default UserWithPost;