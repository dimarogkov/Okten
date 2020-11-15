import React, { Component } from "react";
import {Service} from "../../services/service";
import Post from "./post";

class Posts extends Component {

    api = new Service();

    state = {
        posts: []
    }

    componentDidMount() {
        this.api.getPosts()
            .then(res => res.json())
            .then(posts => {
                this.setState({posts})
            });
    }

    render() {
        return(
            <div>
                {
                    this.state.posts.map(post => (
                        <Post post={post} key={post.id}/>
                    ))
                }
            </div>
        );
    }
}

export default Posts;