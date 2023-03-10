import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss'],
})
export class RestoComponent {
  getData(): any {
    throw new Error('Method not implemented.');
  }
  restoform: any;
  itemdata: any = [];
  editMode: boolean = false;
  editingIndex: any;
  userUpdate = false;
  status = 'Enable';

  constructor(private fb: FormBuilder) {
    this.restoform = new FormGroup({
      
      name: new FormControl('', [Validators.required,Validators.minLength(4),]),
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl('', [Validators.required,Validators.minLength(10)]),
    });
  }
  get name(){
    return this.restoform.get('name');
  }
  get email(){
    return this.restoform.get('email')
  };
  get mobile(){
    return this.restoform.get('mobile')
  }
  addItem() {
    if (this.restoform.invalid) {
      this.restoform.markAllAsTouched();
      return;
    }
    if (this.editMode) {
      this.itemdata.splice(this.editingIndex, 1, this.restoform.value);
      this.editMode = false;
    } else {
      this.itemdata.push(this.restoform.value);
    }
    this.restoform.reset();
  }
  edit(item: any, i: any) {
    this.editMode = true;
    this.editingIndex = i;
    this.restoform.patchValue(item);
  }
  delete(index: any) {
    this.itemdata.splice(index, 1);
  }
}
