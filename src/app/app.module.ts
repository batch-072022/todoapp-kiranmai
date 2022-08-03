import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './list-user/list-user.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations:[
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ListUsersComponent,
    ListtaskComponent,
    EdittaskComponent,
    AddtaskComponent,
    HomeComponent,
    EditUserComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
