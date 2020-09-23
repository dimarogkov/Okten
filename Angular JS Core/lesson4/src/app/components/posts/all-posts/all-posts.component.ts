import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private postService: PostsService) {
    this.activeRouter.queryParams.subscribe(value => {
      this.postService.getPosts(value.id).subscribe (value => {
        console.log(value);
      })
    })
  }

  ngOnInit(): void {
  }

}
