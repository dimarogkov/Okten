import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Com } from 'src/app/models/com.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  getComments(): Observable<Com[]> {
    return this.http.get<Com[]>('http://jsonplaceholder.typicode.com/comments');
  }
}
