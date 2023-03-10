import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  
  newForm: FormGroup;
  userForm: FormGroup;

  listData: any = this.commonService.getData();
  editingIndex: any
  editMode: boolean =false
  UserUpdate = false;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
    ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required]
    });


    // this.newForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   email: [''],
    //   password: [''],
    //   date: [''],
    //   phone: ['']
    // })
this.newForm = this.fb.group({
  name : new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),
  date: new FormControl ('',[Validators.required]),
  phone: new FormControl ('',[Validators.required])
})
  }

  get name(){
    return this.newForm.get('name');
  }

  addItem() {
    if(this.newForm.invalid){
      this.newForm.markAllAsTouched();
      // this.newForm.markAsDirty();
      return;
    }
    // if(this.editMode){
    //   this.listData.splice(this.editingIndex, 1, this.newForm.value) 
      if(this.editMode){

      this.listData.splice(this.editingIndex,1,this.newForm.value)
      this.editMode=false

    } else {
      // this.commonService.setData(this.newForm.value);
      // this.commonService.getData();

      this.listData.push(this.newForm.value)
    }

    this.newForm.reset()

  }
  deleteItem(index: any) {
    this.listData
      .splice(index, 1)
  }
  editItem(item: any, i: any) {
    this.editingIndex = i 
    this.editMode =  true;
    // console.log(this.listData[i])   this.name =item.name;

    this.newForm.patchValue(item);
  }
}
