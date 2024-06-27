import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub: any) {
    return this.http.post(`${this.apiUrl}notifications`, sub);
  }
}
