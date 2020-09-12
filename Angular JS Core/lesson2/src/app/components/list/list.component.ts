import { Component, OnInit, Input } from '@angular/core';
import { IListModel } from '../../models/list.model';
import { ListService } from "../../services/list.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user: IListModel
  users: IListModel[] = []

  constructor(private ListService:ListService) {
    this.ListService.getlist().subscribe(value => {
      this.users = value;
    })
  }

  remove(value) {
    this.users.splice(value,1);
  }

  ngOnInit(): void {
  }

}
