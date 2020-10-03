import { Component, OnInit } from '@angular/core';
import { ICom } from '../../models/comment.models';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: ICom[]=[]

  constructor(private commentService : CommentService) {
    this.commentService.getComments().subscribe(value => this.comments =value);
  }

  ngOnInit(): void {
  }

}
