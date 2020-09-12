import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { IListModel } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {}

  getlist(): Observable<IListModel[]> {
    return this.http.get<IListModel[]>("https://jsonplaceholder.typicode.com/users");
  }
}
