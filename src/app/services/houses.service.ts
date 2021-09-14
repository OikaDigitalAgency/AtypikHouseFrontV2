import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterHouses, IHousesEntity } from '../models/houses';

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
      dateDebut: registerValues.dateDebut,
      dateFin: registerValues.dateFin,
      idCategory: `\/api\/categories\/${registerValues.idCategory}`,
      idUser: `\/api\/users\/${registerValues.idUser}`,
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
      dateDebut: registerValues.dateDebut,
      dateFin: registerValues.dateFin,
      idCategory: `\/api\/categories\/${registerValues.idCategory}`,
      idUser: `\/api\/users\/${registerValues.idUser}`,
    };

    return this.http.put(`${AUTH_API}/api/houses`, body, httpOptions);
  }

  /**
   * Permet de récupérer la liste des houses.
   */
  getAllHouses(): Observable<any> {
    return this.http.get(`${AUTH_API}/api/houses`, httpOptions);
  }

  /**
   * Permet de rechercher les appartements selon leur ville,
   * leur disponibilité, et leur nombre de lits.
   * @param city 
   * @param dateFin 
   * @param nbbeds 
   * @returns 
   */
  searchHouses(city: string, dateFin: Date, nbbeds: number): Observable<any> {
    return this.http.get(`${AUTH_API}/api/houses?city=${city}&dateFin[after]=${dateFin}&nbbeds[gte]=${nbbeds}&status=true`)
  }

  /**
   * Permet de supprimer la liste des houses.
   */
  deleteAllHouses(): Observable<any> {
    return this.http.delete(`${AUTH_API}/api/houses`, httpOptions);
  }
}
