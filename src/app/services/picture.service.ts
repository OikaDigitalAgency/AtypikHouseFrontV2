import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterPicture,IPictureEntity  } from '../models/picture';

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
export class PictureService {

  constructor(private readonly http: HttpClient) { }

   /**
   * Permet d'enregistrer une nouvelle picture 
   * sur l'application
   */
  register(registerValues: IRegisterPicture): Observable<any> {
    const body: IPictureEntity = {
        title: registerValues.title,
        date: registerValues.date, 
    };

    return this.http.post(`${AUTH_API}/api/pics`, body, httpOptions);
  }

    /**
   * Permet de modifier les pictures 
   * sur l'application
   */
     update(registerValues: IRegisterPicture): Observable<any> {
      const body: IPictureEntity = {
        title: registerValues.title,
        date: registerValues.date, 
      };
  
      return this.http.put(`${AUTH_API}/api/pics`, body, httpOptions);
    }

    /**
   * Permet de récupérer la liste des pictures.
   */
     getAllComments(): Observable<any> {
      return this.http.get(`${AUTH_API}/api/pics`, httpOptions);
    }

      /**
   * Permet de supprimer la liste des pictures.
   */
   deleteAllComments(): Observable<any> {
    return this.http.delete(`${AUTH_API}/api/pics`, httpOptions);
  }
}
