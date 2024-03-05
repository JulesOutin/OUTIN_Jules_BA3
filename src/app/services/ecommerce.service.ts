import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle } from '../models/IArticle';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService {
  private url = 'https://www.eleguen.ovh/api/v1/articles';
  
  constructor(private http: HttpClient) { }

  getAllArticle(): Observable<IArticle> {
    return this.http.get<IArticle>(this.url);
  }


}

