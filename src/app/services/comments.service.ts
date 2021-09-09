import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin':'*', 
    'Authorization': sessionStorage.getItem('token')!
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  

  constructor(private readonly http: HttpClient) { }

  /**
   * Permet de récupérer la liste des commentaires.
   */
   getAllComments(): Observable<any> {
    return this.http.get(`${AUTH_API}/api/comments`, httpOptions);
  }
}
