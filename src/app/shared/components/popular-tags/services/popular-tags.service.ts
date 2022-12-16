import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularTagType } from '@app/shared/types/popular-tag.type';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiBaseUrl + '/tags';

    return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
