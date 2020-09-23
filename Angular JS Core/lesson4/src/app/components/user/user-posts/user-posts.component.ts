import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private userService : UsersService) {
    this.activeRoute.params.subscribe(value => {
      this.userService.getUserByID(value.id).subscribe(value => {
        console.log(value);
      })
    })
  }

  ngOnInit(): void {
  }

}
