import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  id: number
  qp: any;

  constructor(private activatedRouter:ActivatedRoute) {
    this.activatedRouter.params.subscribe(value => {
      this.id = value.id
    })
  }

  ngOnInit(): void {
  }

}
