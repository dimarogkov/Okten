import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-posts-tree',
  templateUrl: './user-posts-tree.component.html',
  styleUrls: ['./user-posts-tree.component.css']
})
export class UserPostsTreeComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(value => {
      console.log(this.router.getCurrentNavigation().extras.state);
    })
  }

  ngOnInit(): void {
  }

}
