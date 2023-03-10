import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {UsersDataService} from './services/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 arr = [];
  title = 'routing-form';
  users:any;
  state: any;
  datesArray: any;
  dataObj:any;
  constructor(private userData:UsersDataService){
  userData.users().subscribe((data: any) => {
	this.dataObj =  data
  console.log('data',data)
})
  }
 data=10
 updatechild(){
  this.data= Math.floor(Math.random()*10)
 }
}
