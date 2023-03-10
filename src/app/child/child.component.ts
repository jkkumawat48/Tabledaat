import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  private _loggedIn = Boolean;
  message = String
  // get loggedIn(): boolean{
  //   return this. _loggedIn;
  // }
  // @Input()
  // set loggedIn(value: boolean){
  //   this._loggedIn =value;
  //   if(value == true){
  //     this.message = 'Welcome Back JavaScrit'
  //   }else{
  //     this.message ='Please LoggedIn'
  //   }
  // }
constructor(){}
  imgUrl= 'https://content.jdmagicbox.com/comp/sangli/m9/9999px233.x233.121023103024.i8m9/catalogue/natural-photo-studio-pragati-colony-sangli-photo-studios-elm6ffa0qn.jpg';
  count=0;
  name:any 
  userName:any 
  private_CousterName:any

  
  IncrementCount(){
    this.count +=1;
  }
  DicrementCount(){
    this.count -=1;
  }
  GreetVishvas(updtedValue:any){
    this.userName= updtedValue;
    if(updtedValue == 'GreetVishvas'){
      alert('Jai Mata Di')
    }
  }
}
