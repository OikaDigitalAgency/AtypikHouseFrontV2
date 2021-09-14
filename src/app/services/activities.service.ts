import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterActivite, IActiviteEntity } from '../models/activite';

const AUTH_API = 'http://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': sessionStorage.getItem('token')!
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer une activité 
  * sur l'application
  */
  register(registerValues: IRegisterActivite): Observable<any> {
    const body: IActiviteEntity = {
      title: registerValues.title,
      description: registerValues.description,
      locationlat: registerValues.locationlat,
      locationlng: registerValues.locationlng,
      idType: `\/api\/activities\/${registerValues.idType}`,
    };

    return this.http.post(`${AUTH_API}/api/activities_types`, body, httpOptions);
  }

  /**
   * Permet de modifier les activités 
   * sur l'application
   */
  update(registerValues: IRegisterActivite): Observable<any> {
    const body: IActiviteEntity = {
      title: registerValues.title,
      description: registerValues.description,
      locationlat: registerValues.locationlat,
      locationlng: registerValues.locationlng,
      idType: `\/api\/activities\/${registerValues.idType}`,
    };

    return this.http.put(`${AUTH_API}/api/activities_types`, body, httpOptions);
  }

  /**
   * Permet de récupérer la liste des activités.
   */
  getAllComments(): Observable<any> {
    return this.http.get(`${AUTH_API}/api/activities_types`, httpOptions);
  }

  /**
   * Permet de supprimer la liste des activités.
   */
  deleteAllComments(): Observable<any> {
    return this.http.delete(`${AUTH_API}/api/activities_types`, httpOptions);
  }
}
