import { Component, OnInit } from '@angular/core';
import { FoodzapserviceService } from '../foodzapservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchText:any;
  admin:boolean=true;
  allAdminData:any;
  allOrders:any=[];
  allItems:any;
  allConsumerData:any;
  users:boolean=false;
  restaurants:boolean=false;
  orders:boolean=false;
  constructor(private service:FoodzapserviceService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAllAdmin().subscribe(data=>{
      this.allAdminData=data;
    })
    this.service.getAllConsumers().subscribe(data=>{
      this.allConsumerData=data;
    })
    this.service.getAllItems().subscribe(data=>{
      this.allItems=data;
    })
    this.service.getAllOrders().subscribe(data=>{
      this.allOrders=data;
    })
  }

  editAdmin(data:any){
    this.route.navigateByUrl('/editadmin/'+data.id);
  }
  deleteAdmin(data:any){
    this.service.deleteAdminData(data).subscribe(res=>{
      this.allAdminData=res;
    })
  }

  editConsumer(data:any){
    this.route.navigateByUrl('/edituser/'+data.id);
  }
  deleteConsumer(data:any){
    this.service.deleteConsumerData(data).subscribe(res=>{
      this.allConsumerData=res;
    })
  }

  deleteOrder(data:any){
    if(confirm("Are you sure you want to delete?")){
    this.service.deleteOrder(data).subscribe(res=>{
      this.allOrders=res;
    })
  }
  }

  editrestaurant(data:any){
    this.route.navigateByUrl('/editrestaurant/'+data.id)
  }

  deleterestaurant(data:any){
    if(confirm("Are you sure you want to delete?")){
    this.service.deleteItem(data).subscribe(res=>{
      this.allItems=res;
    })
    }
  }

  userInfo(){
    this.users=true;
    this.admin=false;
    this.restaurants=false;
    this.orders=false;
  }

  restaurantInfo(){
    this.restaurants=true;
    this.users=false;
    this.admin=false;
    this.orders=false;
  }

  adminInfo(){
    this.users=false;
    this.admin=true;
    this.restaurants=false;
    this.orders=false;
  }
  orderInfo(){
    this.orders=true;
    this.users=false;
    this.admin=false;
    this.restaurants=false;
  }

}
