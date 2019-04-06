import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Rss } from '../types/models/rss';
import { Observable } from 'rxjs';
import { RssSource } from '../types/models/rssSourse';


@Injectable({
  providedIn: 'root'
})
export class RssServiceService {

   url = "http://localhost:5555/api/rss";

  constructor(private httpClient: HttpClient) { }
 
  getRsses(): Observable<Rss[]> {
    return this.httpClient.get<Rss[]>(this.url);
  }

  getRss(id: number): Observable<Rss[]> {
    const url = this.url + "/" + id;
    return this.httpClient.get<Rss[]>(url);
  }

  getRssSource(id: number): Observable<RssSource> {
    const url = this.url + "/" + id;
    return this.httpClient.get<RssSource>(url);
  }



}
