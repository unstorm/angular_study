import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): any {
    return this.http.get<{type:string,price:number}[]>('../../assets/data.json')
  }

  getExternalData(){
    //let url = 'http://localhost:8080/snowequip/test'
    let url = 'http://localhost:8888/test'
    let header = new HttpHeaders({
      "Content-Type":"application/json"
    })
    let bodyData = {}
    let result = this.http.post<any>(url, bodyData, {headers : header});    
    //let result = this.http.get<any>(url);    
    return result;
  }
}
