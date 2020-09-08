import { Component } from '@angular/core';
import { UserServices } from './services/user.services';
import { IUserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usersArr: IUserModel[] = []
  
  constructor(private userServices:UserServices){
    this.userServices.getUser().subscribe(value => {
      console.log(value);
      this.usersArr = value
    })
  }
}
