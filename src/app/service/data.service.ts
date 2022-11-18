import { HttpClient } from '@angular/common/http';
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
}
