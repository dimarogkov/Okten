import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
 users: User[] = []

  constructor(private userService: UsersService) {
    this.userService.getUser().subscribe(value => {
      this.users = value
    })
  }

  ngOnInit(): void {
  }

}
