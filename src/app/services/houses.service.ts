import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterHouses,IHousesEntity  } from '../models/houses';

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
export class HousesService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer un nouveau house 
  * sur l'application
  */
 register(registerValues: IRegisterHouses): Observable<any> {
   const body: IHousesEntity = {
      title: registerValues.title,
      description: registerValues.description,
      address: registerValues.address,
      zipecode: registerValues.zipecode,
      city: registerValues.city,
      status: registerValues.status,
      nbbeds: registerValues.nbbeds,
      price: registerValues.price,
      tax: registerValues.tax,
      listeActivities: registerValues.listeActivities,
      listidPics: registerValues.listidPics,
      idCategory: registerValues.idCategory,
      idUser: registerValues.idUser,
   };

   return this.http.post(`${AUTH_API}/api/houses`, body, httpOptions);
 }

   /**
  * Permet de modifier les houses 
  * sur l'application
  */
    update(registerValues: IRegisterHouses): Observable<any> {
     const body: IHousesEntity = {
      title: registerValues.title,
      description: registerValues.description,
      address: registerValues.address,
      zipecode: registerValues.zipecode,
      city: registerValues.city,
      status: registerValues.status,
      nbbeds: registerValues.nbbeds,
      price: registerValues.price,
      tax: registerValues.tax,
      listeActivities: registerValues.listeActivities,
      listidPics: registerValues.listidPics,
      idCategory: registerValues.idCategory,
      idUser: registerValues.idUser, 
     };
 
     return this.http.put(`${AUTH_API}/api/houses`, body, httpOptions);
   }

   /**
  * Permet de récupérer la liste des houses.
  */
    getAllComments(): Observable<any> {
     return this.http.get(`${AUTH_API}/api/houses`, httpOptions);
   }

     /**
  * Permet de supprimer la liste des houses.
  */
  deleteAllComments(): Observable<any> {
   return this.http.delete(`${AUTH_API}/api/houses`, httpOptions);
 }
}
