import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comment-component/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import { PostCommentsComponent } from './components/post-component/post-comments/post-comments.component';
import { PostsComponent } from './components/post-component/posts/posts.component';
import { UserPostComponent } from './components/user-component/user-post/user-post.component';
import { UsersComponent } from './components/user-component/users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserPostComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostCommentsComponent},
  {path: 'comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
