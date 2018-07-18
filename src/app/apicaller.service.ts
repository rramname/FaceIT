import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallerService {

  constructor(private http:HttpClient) { }

  detectFaces(data):Observable<any>{
     return this.http.post("https://tagtheface.herokuapp.com/getFaceData",data)
  }
}
