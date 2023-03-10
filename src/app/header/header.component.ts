import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Input() ischild = false;
  // @Input() details: any = [];
  @Input() ischild =false;
  @Input() details: any =[];

  constructor(){}

  ngOnInit(){
    console.log(this.details)
  }
}
