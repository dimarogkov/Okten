import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: IUser[] = []

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit(): void {
  }

}
