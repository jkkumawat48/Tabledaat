import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  myData: any = []
  constructor(){}
  title = 'routing-blog';
name='';
age = '';
gali = '';
editingIndex: any;

addUpdate(){
  if(this.editingIndex == 0 || this.editingIndex) {
    this.myData[this.editingIndex] = {name: this.name, age: this.age, gali: this.gali};
    this.age = '';
    this.name = '';
    this.gali = '';
    this.editingIndex=null
    return;
  }
 this.myData.push({name: this.name, age: this.age, gali: this.gali});
 this.age = '';
 this.name = '';
 this.gali = '';
}

delete(index: any) {
  this.myData.splice(index, 1);
}

edit(data: any, i: any) {
  this.age = data.age;
  this.name = data.name;
  this.gali = data.gali;
  this.editingIndex = i;
}
}
