import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister, IUserEntity } from '../models/register';



const AUTH_API = 'https://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin':'*', 
    'Authorization': sessionStorage.getItem('token')!,
    'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly https: HttpClient) { }

    /**
   * Permet d'enregistrer un nouvel utilisateur 
   * sur l'application
   */
     register(registerValues: IRegister): Observable<any> {
      const body: IUserEntity = {
        email: registerValues.email,
        plainPassword: registerValues.password, 
        lastname: registerValues.lastName,
        firstname: registerValues.firstName,
        zipcode: registerValues.zipCode,
        address: registerValues.address,
        phone: registerValues.phoneNumber,
        city: registerValues.city,
      };
  
      return this.https.post(`${AUTH_API}/register`, body, httpOptions);
    }

  /**
   * Permet d'afficher un user.
   */

  /**
   * Permet de rechercher les appartements selon leur ville,
   * leur disponibilité, et leur nombre de lits.
   * @param id 
   * @returns 
   */

   getUser(id: number): Observable<any> {
    return this.https.get(`${AUTH_API}/api/profile/${id}`, httpOptions);
  }

}
