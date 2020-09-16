import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { AllUserComponent } from 'src/components/user/all-user/all-user.component';
import { UserAboutComponent } from 'src/components/user/user-about/user-about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUserComponent},
  {path: 'users/:id', component: UserAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
