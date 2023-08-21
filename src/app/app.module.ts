import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { GuestpageComponent } from './guestpage/guestpage.component';
import { GuestpagechildComponent } from './guestpagechild/guestpagechild.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreakfastcompComponent } from './breakfastcomp/breakfastcomp.component';
import { AdminComponent } from './admin/admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AddnewrestaurantComponent } from './addnewrestaurant/addnewrestaurant.component';
import { AddnewadminComponent } from './addnewadmin/addnewadmin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { EditusercompComponent } from './editusercomp/editusercomp.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OthermenusComponent } from './othermenus/othermenus.component';
import {CoolStorageModule} from '@angular-cool/storage';
import { CartComponent } from './cart/cart.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UsernavbarComponent,
    GuestpageComponent,
    GuestpagechildComponent,
    RegisteruserComponent,
    SidebarComponent,
    BreakfastcompComponent,
    AdminComponent,
    AdminnavbarComponent,
    AddnewrestaurantComponent,
    AddnewadminComponent,
    EditadminComponent,
    EditusercompComponent,
    OthermenusComponent,
    CartComponent,
    EditrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    CoolStorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
