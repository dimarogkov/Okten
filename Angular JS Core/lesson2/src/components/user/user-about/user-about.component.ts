import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit {
id:string

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(value => {
      this.id = value.id;
    })
  }

  ngOnInit(): void {
  }

}
