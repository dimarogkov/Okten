import { Component, Input, OnInit } from '@angular/core';
import { ICom } from '../../models/comment.models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: ICom

  constructor() { }

  ngOnInit(): void {
  }

}
