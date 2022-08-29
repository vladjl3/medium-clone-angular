import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  public set(key: string, data: any): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error saving to localStorage', error);
    }
  }
  public get(key: string): any {
    try {
      return JSON.parse('' + localStorage.getItem(key));
    } catch (error) {
      console.log('Error getting data from localStorage', error);
      return null;
    }
  }
}
