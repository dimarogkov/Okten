import { Component, OnInit } from '@angular/core';
import { Com } from 'src/app/models/com.model';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Com[]=[]

  constructor(private commentsService : CommentsService) {
    this.commentsService.getComments().subscribe (value => {
      this.comments = value
    })
  }

  ngOnInit(): void {
  }

}
