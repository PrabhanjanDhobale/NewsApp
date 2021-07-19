import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewappserviceService {

  constructor(private _http: HttpClient) { }

  url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e514e2863c18498392f9970eee2cfb0f"

  defaultnews(): Observable<any> {
    return this._http.get(this.url);
  }

  getnews(category:any,country:any): Observable<any>{
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e514e2863c18498392f9970eee2cfb0f`);
  }

  getCategorynews(category:any): Observable<any>{
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e514e2863c18498392f9970eee2cfb0f`);
  }

  getCountryNews(country:any): Observable<any>{
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=e514e2863c18498392f9970eee2cfb0f`);
  }
}
