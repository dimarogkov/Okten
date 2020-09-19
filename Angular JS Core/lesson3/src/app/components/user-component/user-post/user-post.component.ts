import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  id: string
  userPosts: Post[] = []

  constructor(private activeRoute: ActivatedRoute, private usersService: UsersService) {
    this.activeRoute.params.subscribe(value => {
      this.id = value.id;
      this.usersService.getUserPosts(this.id).subscribe(value => {
        this.userPosts = value;
      })
    })
  }

  ngOnInit(): void {
  }

}
