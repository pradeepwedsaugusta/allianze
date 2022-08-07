import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticService {

  constructor(private _http: HttpClient) { }

  getArtCollections(pageNo: number):Observable<any> {
    return this._http.get(`${environment.apiURL}/artworks?limit=${environment.pageSize}&page=${pageNo}`);
  }

}
