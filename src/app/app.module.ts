import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContextComponent } from './context/context.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UberComponent } from './uber/uber.component';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { ChildComponent } from './child/child.component';
import { DesboredComponent } from './desbored/desbored.component';
import { HeaderComponent } from './header/header.component';
import { RestoComponent } from './resto/resto.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    ContextComponent,
    UberComponent,
    TableComponent,
    ChildComponent,
    DesboredComponent,
    HeaderComponent,
    RestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
