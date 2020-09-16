import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AllUserComponent } from 'src/components/user/all-user/all-user.component';
import { UserDetailComponent } from 'src/components/user/user-detail/user-detail.component';
import { UserAboutComponent } from 'src/components/user/user-about/user-about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllUserComponent,
    UserDetailComponent,
    UserAboutComponent
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
