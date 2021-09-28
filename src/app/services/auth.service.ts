import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister, IUserEntity } from '../models/register';
import { ILogin, ILoginEntity } from '../models/login';
import { ISearch, ISearchEntity } from '../models/search';
import { IAddHouses, IAddHousesEntity } from '../models/addhouse';
import { IContact, IContactEntity } from '../models/contact';

const AUTH_API = 'https://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly https: HttpClient) { }

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
    return this.https.post(`${AUTH_API}/api/login`, body, httpOptions);
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

    return this.https.post(`${AUTH_API}/register`, body, httpOptions);
  }

 /**
   * Permet de mettre a jour un user.
   */
  update(registerValues: IRegister, id: number): Observable<any> {
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

    return this.https.put(`${AUTH_API}/api/users/${id}`, body, httpOptions);
  }

   /**
   * Permet de supprimer un user.
   */
    deleteUser(id: number): Observable<any> {
      return this.https.delete(`${AUTH_API}/api/users/${id}`, httpOptions);
    }


  /**Requete search house */
  search(searchValues: ISearch): Observable<any> {
    const body: ISearchEntity = {
      dateArrivée: searchValues.dateFrom,
      dateDépart: searchValues.dateTo,
      nombreAdultes: searchValues.nbPerson,
      nombreEnfants: searchValues.nbChildren,
      ville: searchValues.city,
    };
    return this.https.post(`${AUTH_API}/api/search`, body, httpOptions);
  }

  addhouse(addhouseValues: IAddHouses): Observable<any> {
    const body: IAddHousesEntity = {
      title: addhouseValues.title,
      description: addhouseValues.description,
      address: addhouseValues.address, 
      city: addhouseValues.city,
      zipecode: addhouseValues.zipecode,
      nbbeds: addhouseValues.nbbeds,
      price: addhouseValues.price,
      tax: addhouseValues.tax,
      listeActivities: addhouseValues.listeActivities,
      imagefile: addhouseValues.imagefile,
    };
    return this.http.post(`${AUTH_API}/api/addhouse`, body, httpOptions);
  }

  contact(contactValues: IContact): Observable<any> {
    const body: IContactEntity = {
      firstname: contactValues.firstname,
      lastname: contactValues.lastname,
      email: contactValues.email, 
      message: contactValues.message, 
    };
    return this.http.post(`${AUTH_API}/api/contact`, body, httpOptions);
  }
}
