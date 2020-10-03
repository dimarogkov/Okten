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
    this.userService.getUsers().subscribe (users => {
      this.users = users;
    })
  }

  ngOnInit(): void {
  
  }


  getUser() {
    this.userService.getUser(this.userId).subscribe(user => {
      this.user = user;

      this.userForma = this.formBuilder.group({
        name: [user.name, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        surname: [user.username, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        email: [user.email, [Validators.required,Validators.email, Validators.minLength(6), Validators.maxLength(33)]],
        id: [user.id, [Validators.required,Validators.pattern('([0-9]|1[0-9]|2[0-4])')]]
      })
    })
  }

  showUser() {
    console.log(this.userForma.value);
  }
}
