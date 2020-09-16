import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = []

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUser().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit(): void {
  }

  
}
