import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallerService {

  constructor(private http:HttpClient) { }

  detectFaces(data):Observable<any>{
   
    console.log("make call")
      return this.http.post("https://eastus.api.cognitive.microsoft.com/face/v1.0/detect",data)
  }
}
