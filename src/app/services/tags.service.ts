import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterTags,ITagsEntity  } from '../models/tags';

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
export class TagsService {

  constructor(private readonly http: HttpClient) { }

   /**
   * Permet d'enregistrer un nouveau tag 
   * sur l'application
   */
  register(registerValues: IRegisterTags): Observable<any> {
    const body: ITagsEntity = {
      type: registerValues.type,
      tag: registerValues.tag, 
    };

    return this.http.post(`${AUTH_API}/api/tags`, body, httpOptions);
  }

    /**
   * Permet de modifier un nouveau tag 
   * sur l'application
   */
     update(registerValues: IRegisterTags): Observable<any> {
      const body: ITagsEntity = {
        type: registerValues.type,
        tag: registerValues.tag, 
      };
  
      return this.http.put(`${AUTH_API}/api/tags`, body, httpOptions);
    }

    /**
   * Permet de récupérer la liste des tags.
   */
     getAllComments(): Observable<any> {
      return this.http.get(`${AUTH_API}/api/tags`, httpOptions);
    }

      /**
   * Permet de supprimer la liste des tags.
   */
   deleteAllComments(): Observable<any> {
    return this.http.delete(`${AUTH_API}/api/tags`, httpOptions);
  }
}
