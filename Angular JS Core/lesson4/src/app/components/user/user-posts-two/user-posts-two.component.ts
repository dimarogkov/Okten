import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-posts-two',
  templateUrl: './user-posts-two.component.html',
  styleUrls: ['./user-posts-two.component.css']
})
export class UserPostsTwoComponent implements OnInit {

  constructor(private router: Router, private activeRouter : ActivatedRoute) {
    this.activeRouter.params.subscribe(value => {
      console.log(this.router.getCurrentNavigation().extras.state)
    })
  }

  ngOnInit(): void {
  }

}
