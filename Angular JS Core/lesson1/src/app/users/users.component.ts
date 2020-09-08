import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';
import { IUserModel } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersArr: IUserModel[] = []
  
  constructor(private userServices:UserServices){
    this.userServices.getUser().subscribe(value => {
      console.log(value);
      this.usersArr = value
    })
  }

  ngOnInit(): void {
}

}
