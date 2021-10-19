import { Injectable } from '@angular/core';

const ID_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class IdStorageService {

  constructor() { }

  public saveId(id: number): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, JSON.stringify(id));
  }
}
