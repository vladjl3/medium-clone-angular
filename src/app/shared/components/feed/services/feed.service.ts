import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../types/get-feed-response.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(urlEndpoint: string): Observable<GetFeedResponseInterface> {
    const url = environment.apiBaseUrl + urlEndpoint;
    return this.http.get<GetFeedResponseInterface>(url);
  }
}
