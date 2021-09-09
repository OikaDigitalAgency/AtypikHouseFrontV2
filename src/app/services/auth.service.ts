import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister, IUserEntity } from '../models/register';
import { ILogin, ILoginEntity } from '../models/login';

const AUTH_API = 'http://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  /**
   * Permet de logger l'utilisateur sur l'application
   * @param loginValues 
   * @returns 
   */
  login(loginValues: ILogin): Observable<any> {
    const body: ILoginEntity = {
      username: loginValues.email,
      password: loginValues.password,
    };
    return this.http.post(`${AUTH_API}/api/login`, body, httpOptions);
  }

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

    return this.http.post(`${AUTH_API}/register`, body, httpOptions);
  }
}
