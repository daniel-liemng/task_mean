import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly API_URL;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://localhost:5000';
  }

  get(uri: string) {
    return this.http.get(`${this.API_URL}/${uri}`);
  }

  post(uri: string, data: Object) {
    return this.http.post(`${this.API_URL}/${uri}`, data);
  }

  patch(uri: string, data: Object) {
    return this.http.patch(`${this.API_URL}/${uri}`, data);
  }

  delete(uri: string) {
    return this.http.delete(`${this.API_URL}/${uri}`);
  }
}
