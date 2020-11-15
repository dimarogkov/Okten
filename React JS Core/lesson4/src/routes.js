import React from "react";
import {Route, Switch} from "react-router";
// 
import Home from "./components/home/home";
import Users from "./components/user/users";
import UsersWithPost from "./components/user/userWithPost";
import Posts from "./components/post/posts";
import Comments from "./components/comment/comments";
import PostWithComment from "./components/post/postWithComment";

const Routes = () => {
    return(
        <Switch>
            <Route path="/users/:id" component={UsersWithPost}/>
            <Route path="/posts/:id" component={PostWithComment}/>
            <Route path="/users" component={Users}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/comments" component={Comments}/>
            <Route path='/' exact component={Home}/>
        </Switch>
    ) 
}

export default Routes;