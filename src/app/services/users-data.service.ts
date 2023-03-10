import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url="https://data.covid19india.org/v4/min/timeseries.min.json"
// url="http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url)
    // console.log(this.url)
  }
}
