import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  ngOnInit(): void {
  }

}
