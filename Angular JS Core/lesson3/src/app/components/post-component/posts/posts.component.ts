import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]=[]

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value;
    })
  }

  ngOnInit(): void {
  }

}
