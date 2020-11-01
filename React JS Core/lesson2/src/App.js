import './App.css';
import React from "react";
import UserList from './components/user-list/userList';
import PostList from './components/post-list/postList';
import CommentList from './components/comment-list/commentList';

function App() {
  return (
      <div>
          <UserList/>
          <PostList/>
          <CommentList/>
      </div>
  )
}

export default App;
