import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { AllUsersComponent } from './components/user/all-users/all-users.component';
import { UserPostsTreeComponent } from './components/user/user-posts-tree/user-posts-tree.component';
import { UserPostsTwoComponent } from './components/user/user-posts-two/user-posts-two.component';
// import { UserPostsComponent } from './components/user/user-posts/user-posts.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'users', component: AllUsersComponent, children: [
    // {path: 'posts/:id', component: UserPostsComponent},
    {path: 'posts/:id', component: UserPostsTwoComponent},
    {path: 'posts/:id', component: UserPostsTreeComponent},
    {path: 'posts', component: AllPostsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
