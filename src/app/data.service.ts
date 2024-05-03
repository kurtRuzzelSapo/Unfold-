import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './login/login.component';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  userData: any;
  constructor(private http: HttpClient) {}

  // apiURL: string = 'http://localhost/API/api/';
  apiURL: string = 'http://localhost/Unfold-API/api/';

  sendRequest(endpoint: string, data: any): Observable<Status> {
    return this.http.post<Status>(this.apiURL + endpoint, JSON.stringify(data));
  }

  // sendRequest(endpoint: string, data: any): Observable<any> {
  //   return this.http.post<any>(this.apiURL + endpoint, JSON.stringify(data), { observe: 'response' });
  // }
  // sendRequest(endpoint: string, data: any) {
  //   const result = this.http.post(this.apiURL + endpoint, JSON.stringify(data));
  //   return result;
  // }

  getRequest(endpoint: string) {
    const result = this.http.get(this.apiURL + endpoint);
    return result;
  }

  setUserData(userData: any) {
    this.userData = userData;
  }

  getUserData() {
    return this.userData;
  }
}
