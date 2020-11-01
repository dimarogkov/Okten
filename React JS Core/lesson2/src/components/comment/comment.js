import React, { Component } from "react";

class Comment extends  Component {
    render() {
        const {id,name,email,body} = this.props.comment;

        return(
            <div>
                {
                    <div>
                        <p>{id}</p>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{body}</p><hr></hr>
                    </div>
                }
            </div>
        )
    }
}

export default Comment;