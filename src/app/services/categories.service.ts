import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterCategories,ICategoriesEntity  } from '../models/categories';

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
export class CategoriesService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer une nouvelle categorie
  * sur l'application
  */
 register(registerValues: IRegisterCategories): Observable<any> {
   const body: ICategoriesEntity = {
      title: registerValues.title,
      description: registerValues.description,
   };

   return this.http.post(`${AUTH_API}/api/categories`, body, httpOptions);
 }

   /**
  * Permet de modifier les categories 
  * sur l'application
  */
    update(registerValues: IRegisterCategories): Observable<any> {
     const body: ICategoriesEntity = {
      title: registerValues.title,
      description: registerValues.description,
     };
 
     return this.http.put(`${AUTH_API}/api/categories`, body, httpOptions);
   }

   /**
  * Permet de récupérer la liste des categories.
  */
    getAllComments(): Observable<any> {
     return this.http.get(`${AUTH_API}/api/categories`, httpOptions);
   }

     /**
  * Permet de supprimer la liste des categories.
  */
  deleteAllComments(): Observable<any> {
   return this.http.delete(`${AUTH_API}/api/categories`, httpOptions);
 }
}
