import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userForm: FormGroup
  listData:any
  editMode: boolean=false
  name=''
  email=''
  password=''
  editingIndex:any
  constructor(private fb: FormBuilder)
  { this.listData=[]
    this.userForm =this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',Validators.required,Validators.minLength(4),]
    })
  }
public AddItem(){
  // this.listData.push(this.userForm.value);
  // console.log(this.userForm.value)
  // this.userForm.reset()
  if(this.editingIndex == 0 || this.editingIndex){
    this.listData[this.editingIndex] = {name:this.name, email:this.email, password:this.password}

    this.name='';
    this.email='';
    this.password='';
    this.editingIndex=null
    // return
    this.editMode=false
  }else{
    this.listData.push({name:this.name,email:this.email,password:this.password})
    this.name='';
    this.email='';
    this.password=''
    this.editMode =false
  }
  // if(this.editMode){
  //   this.listData.splice(this.editingIndex,1,this.userForm.value)
  // }else{
  //   this.listData.push(this.userForm.value)
  // }
  // this.userForm.reset()
}
editItem(item:any,i:any){
  this.name =item.name;
  this.email= item.email;
  this.password= item.password;
  this.editingIndex= i
  this.editMode=true
  // this.userForm.patchValue(item)
}

removeItem(index:any){
  this.listData.splice(index,1)
}
  ngOnInit() {
  
  }
}
