import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http : HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://jsonplaceholder.typicode.com/posts');
  }
}
