import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterPosts,IPostsEntity  } from '../models/posts';

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

export class PostsService {

  constructor(private readonly http: HttpClient) { }

   /**
   * Permet d'enregistrer un nouveau post 
   * sur l'application
   */
  register(registerValues: IRegisterPosts): Observable<any> {
    const body: IPostsEntity = {
        title: registerValues.title,
        content: registerValues.content, 
        publishDate: registerValues.publishDate,
        published: registerValues.published,
        idHouse: registerValues.idHouse,
        author: registerValues.author,
    };

    return this.http.post(`${AUTH_API}/api/posts`, body, httpOptions);
  }

    /**
   * Permet de modifier un post 
   * sur l'application
   */
     update(registerValues: IRegisterPosts): Observable<any> {
      const body: IPostsEntity = {
        title: registerValues.title,
        content: registerValues.content, 
        publishDate: registerValues.publishDate,
        published: registerValues.published,
        idHouse: registerValues.idHouse,
        author: registerValues.author,
      };
  
      return this.http.put(`${AUTH_API}/api/posts`, body, httpOptions);
    }

    /**
   * Permet de récupérer la liste des posts.
   */
     getAllComments(): Observable<any> {
      return this.http.get(`${AUTH_API}/api/posts`, httpOptions);
    }

      /**
   * Permet de supprimer la liste des posts.
   */
   deleteAllComments(): Observable<any> {
    return this.http.delete(`${AUTH_API}/api/posts`, httpOptions);
  }
}
