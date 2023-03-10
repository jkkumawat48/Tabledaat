import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.scss']
})
export class UberComponent implements OnInit {
  dataForm:FormGroup;
  useData:any
  name=''
  email=''
  password=''
  editingIndex:any
constructor(private fb: FormBuilder)
{this.useData=[]
  this.dataForm= this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    date:['',[Validators.required]],
    password:['',[Validators.required]],
    mobile:['',[Validators.required]]
  })
}
adduser(){
this.useData.push(this.dataForm.value)
console.log(this.dataForm.value)
this.dataForm.reset()

}
delete(index:any){
  this.useData.splice(index,1)
}
edit(item:any,i:any){
  this.useData.splice(i,1)
  this.dataForm.patchValue(item,i)
  
}
ngOnInit(): void {

}
}
