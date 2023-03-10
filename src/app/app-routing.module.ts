import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';
import { ContextComponent } from './context/context.component';
import { DesboredComponent } from './desbored/desbored.component';
import { HomeComponent } from './home/home.component';
import { RestoComponent } from './resto/resto.component';
import { TableComponent } from './table/table.component';
import { UberComponent } from './uber/uber.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path:'about',component:AboutComponent}, 
  {path:'user',component:UserComponent},
  {path:'context',component:ContextComponent},
  {path: 'table',component:TableComponent},
  {path:'uber',component:UberComponent},
  {path:'child',component:ChildComponent},
  {path: 'resto',component:RestoComponent},
//   {path:'',component:HomeComponent},
//  {path:'desbored',component:DesboredComponent}, 
//  children:[
//   {path:'context',component:ContextComponent},
// {path: 'table',component:TableComponent},
//  ]
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
