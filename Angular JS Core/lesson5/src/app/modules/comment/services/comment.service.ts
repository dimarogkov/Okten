import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICom } from '../models/comment.models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getComments(): Observable<ICom[]> {
    return this.http.get<ICom[]>('http://jsonplaceholder.typicode.com/comments');
  }
}
