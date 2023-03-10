import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  data: any = [];

  constructor() { }

  setData(inData: any, index?: any) {
    this.data.push(inData);
    // this.data.push(index)
  }

  getData() {
    return this.data;
  }
}
