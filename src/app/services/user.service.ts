import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister, IUserEntity } from '../models/register';



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
export class UserService {

  constructor(private readonly https: HttpClient) { }
  /**
   * Permet d'afficher un user.
   * en le recherchant via son email.
   */

  /**
   * @param email
   * @returns 
   */

   getUser(email: string): Observable<any> {
    return this.https.get(`${AUTH_API}/api/user/${email}`, httpOptions);
  }

}
