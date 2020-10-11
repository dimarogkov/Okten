import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[] = []
  user: User;

  userId: any;
  userForma: FormGroup;

  constructor(private userService: UsersService, private formBuilder: FormBuilder) {
    this.userService.getUsers().subscribe (users => this.users = users);
  }

  ngOnInit(): void {
  
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe(user => {
      this.user = user;

      this.userForma = this.formBuilder.group({
        name: [user.name, [Validators.required, Validators.minLength(5)]],
        surname: [user.username, [Validators.required, Validators.minLength(5)]],
        email: [user.email, [Validators.required,Validators.email, Validators.minLength(6)]]
      })
    })
  }

  showUser() {
    console.log(this.userForma.value);
  }
}
