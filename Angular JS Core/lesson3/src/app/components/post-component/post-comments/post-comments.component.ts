import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Com } from 'src/app/models/com.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  id: string
  postComment : Com[]

  constructor(private activedRoute: ActivatedRoute, private postsServices: PostsService) {
    this.activedRoute.params.subscribe(value => {
      this.id = value.id;
      this.postsServices.getPostComments(this.id).subscribe(value => {
        this.postComment = value;
      })
    })
  }

  ngOnInit(): void {
  }

}
