import { Injectable } from '@angular/core';
import { ISearch, ISearchEntity } from '../models/search';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private readonly https: HttpClient) { }

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
}
