import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
newForm: FormGroup;
data = {
  name: 'baba ji',
  email: 'Hello@hmail.com',
  password: '123456'
};
constructor(
  private fb:  FormBuilder
) {
  this.newForm = this.fb.group({
    name: ['J K', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    date: ['', [Validators.required]]
  })
}
submit() {
  // if(this.newForm.invalid) {
  //   return;
  // }
  // console.log(this.newForm.value)
  // this.newForm.reset();
  this.newForm.patchValue(this.data);
}
}
