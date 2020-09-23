import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/user/all-users/all-users.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { HomeComponent } from './components/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPostsComponent } from './components/user/user-posts/user-posts.component';
import { UserPostsTwoComponent } from './components/user/user-posts-two/user-posts-two.component';
import { UserPostsTreeComponent } from './components/user/user-posts-tree/user-posts-tree.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserDetailComponent,
    HomeComponent,
    UserPostsComponent,
    UserPostsTwoComponent,
    UserPostsTreeComponent,
    AllPostsComponent
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
