import { Component, OnInit, Input } from '@angular/core';
import { Com } from 'src/app/models/com.model';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  @Input() com: Com

  constructor() { }

  ngOnInit(): void {
  }

}
