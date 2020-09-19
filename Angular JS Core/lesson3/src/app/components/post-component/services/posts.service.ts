import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Com } from 'src/app/models/com.model';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getPostComments(id: string): Observable<Com[]>{
    return this.http.get<Com[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
