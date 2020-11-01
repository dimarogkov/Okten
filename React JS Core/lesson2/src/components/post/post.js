import React, { Component } from "react";

class Post extends Component {

    render () {
        const {id,title,body} = this.props.post;

        return(
            <div>
                {
                    <div>
                        <p>{id}</p>
                        <p>{title}</p>
                        <p>{body}</p><hr></hr>
                    </div>
                }
            </div>
        )
    }
}

export default Post;