import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {
topics =['Angular','React','Vue'];
 newForm: FormGroup;
 constructor(
  private fb: FormBuilder
 ){
  this.newForm = this.fb.group({
    name: ['rahul ',[Validators.required]],
    email: ['',[Validators.required]],
    password:[' ',[Validators.required,  Validators.minLength(5)]],
  })
 }
 
ngOninit(): void{
  this.newForm.get('name')
}
ngOnInit(): void {
  this.newForm.get('email')
}

Submit(){
  if(this.newForm.invalid){
    return;
  }
  console.log(this.newForm.value)
   this.newForm.reset()
}
}
