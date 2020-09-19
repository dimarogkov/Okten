import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/user-component/users/users.component';
import { PostsComponent } from './components/post-component/posts/posts.component';
import { CommentsComponent } from './components/comment-component/comments/comments.component';
import { UserDetailComponent } from './components/user-component/user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './components/post-component/post-detail/post-detail.component';
import { CommentDetailComponent } from './components/comment-component/comment-detail/comment-detail.component';
import { UserPostComponent } from './components/user-component/user-post/user-post.component';
import { PostCommentsComponent } from './components/post-component/post-comments/post-comments.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailComponent,
    PostDetailComponent,
    CommentDetailComponent,
    UserPostComponent,
    PostCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
