import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post.models';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: IPost[]=[]

  constructor( private postService : PostService) {
    this.postService.getPosts().subscribe( value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
