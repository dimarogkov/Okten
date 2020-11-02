import React, { Component } from "react";
import {PostServices} from '../../services/postServices'
import Post from "../post/post";


class PostList extends Component {
    api = new PostServices();
    state = {posts: []}

    async componentDidMount() {
        this.setState({posts: await this.api.getPosts()});
    }

    render() {
        return(
            <div>
                <h2>Posts</h2>
                {
                    this.state.posts.map( value => 
                        (
                            <Post post={value} key={value.id} />
                        )
                    )
                }
            </div>
        );
    }
}

export default PostList;