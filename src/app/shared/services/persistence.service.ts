import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  public ACCESS_TOKEN_LC_KEY = 'accessToken';

  public set(key: string, data: any): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error while saving to localStorage', error);
    }
  }
  public get(key: string): any {
    try {
      const item = localStorage.getItem(key);
      const itemString = item !== null ? item : 'item is null';
      return JSON.parse(itemString);
    } catch (error) {
      console.log('Error while getting data from localStorage', error);
      return null;
    }
  }
}
