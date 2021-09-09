import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterActivitesType,IActivitesTypesEntity  } from '../models/activites_type';

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
export class ActivitiesTypesService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer un nouveau type d'activité 
  * sur l'application
  */
 register(registerValues: IRegisterActivitesType): Observable<any> {
   const body: IActivitesTypesEntity = {
      title: registerValues.title,
   };

   return this.http.post(`${AUTH_API}/api/activities_types`, body, httpOptions);
 }

   /**
  * Permet de modifier les types d'activités 
  * sur l'application
  */
    update(registerValues: IRegisterActivitesType): Observable<any> {
     const body: IActivitesTypesEntity = {
      title: registerValues.title,
     };
 
     return this.http.put(`${AUTH_API}/api/activities_types`, body, httpOptions);
   }

   /**
  * Permet de récupérer la liste des types d'activités.
  */
    getAllComments(): Observable<any> {
     return this.http.get(`${AUTH_API}/api/activities_types`, httpOptions);
   }

     /**
  * Permet de supprimer la liste des types d'activités.
  */
  deleteAllComments(): Observable<any> {
   return this.http.delete(`${AUTH_API}/api/activities_types`, httpOptions);
 }
}
