import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users: User[] =[]

  constructor(private userService:UserService) {
    this.userService.getuser().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit(): void {
  }

}
