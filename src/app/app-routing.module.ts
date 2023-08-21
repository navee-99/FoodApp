import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewadminComponent } from './addnewadmin/addnewadmin.component';
import { AddnewrestaurantComponent } from './addnewrestaurant/addnewrestaurant.component';
import { AdminComponent } from './admin/admin.component';
import { BreakfastcompComponent } from './breakfastcomp/breakfastcomp.component';
import { CartComponent } from './cart/cart.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { EditusercompComponent } from './editusercomp/editusercomp.component';
import { GuestpageComponent } from './guestpage/guestpage.component';
import { GuestpagechildComponent } from './guestpagechild/guestpagechild.component';
import { LoginComponent } from './login/login.component';
import { OthermenusComponent } from './othermenus/othermenus.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path:'',
    component:GuestpageComponent,
    children:[
      {
      path:'guestchild',
      component:GuestpagechildComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'registeruser',
    component:RegisteruserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'addnewrestaurant',
    component:AddnewrestaurantComponent
  },
  {
    path:'editadmin/:id',
    component:EditadminComponent
  },
  {
    path:'edituser/:id',
    component:EditusercompComponent
  },
  {
    path:'addnewadmin',
    component:AddnewadminComponent
  },
  {
    path:'breakfast',
    component:BreakfastcompComponent
  },
  {
    path:'othermenus',
    component:OthermenusComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'editrestaurant/:id',
    component:EditrestaurantComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
