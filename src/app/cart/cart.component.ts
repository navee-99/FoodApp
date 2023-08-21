import { Component, OnInit } from '@angular/core';
import {CoolLocalStorage} from '@angular-cool/storage';
import { Router } from '@angular/router';
import { FoodzapserviceService } from '../foodzapservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  afterorder:any;
  totalprice:any=[];
  item:any;
  retrivedarritems:any=[]
  public static items:any=[];
  public static count:number=0;
  url:string[]=[];
  quantity:any=[];
  noitems:boolean=true;
  availitems:boolean=false;
  fullprice:number=0;
  array3:any;
  constructor(private local:CoolLocalStorage,private route:Router,private service:FoodzapserviceService) { }

  get allitems(){
    return CartComponent.items
  }

  ngOnInit(): void {
    CartComponent.count++;
    this.availitems=true;
    this.noitems=false;
    this.item= sessionStorage.getItem("consumeritems");
    if(this.item==null){
      this.noitems=true;
      this.availitems=false
    }
    else{
      this.retrivedarritems=JSON.parse(this.item)
      if(CartComponent.items.length!=0){
         for (let index = 0; index < this.retrivedarritems.length; index++) {
          if(JSON.stringify(this.retrivedarritems)!=JSON.stringify(CartComponent.items)){
            CartComponent.items=this.retrivedarritems.filter(function(obj:any){return CartComponent.items.indexOf(obj)==-1})
          }
         }
      }
      if(CartComponent.items.length==0){
        for(let index = 0; index < this.retrivedarritems.length; index++) {
          CartComponent.items.push(this.retrivedarritems[index])
        }
      }
    }
  }

  findQuantity(data:any,item:any){
    this.quantity=data.target.value;
    this.totalprice.push(CartComponent.items[item].price*this.quantity);
  }
  removeFromCart(item:any){
    if(confirm("Are you sure you want to remove item?")){
      for(let i=0;i<CartComponent.items.length;i++){
        if(item==i){
          CartComponent.items.splice(i,1);
        }
        sessionStorage.setItem("consumeritems",JSON.stringify(CartComponent.items));
      }
    }
  }

  buynow(){
    if(CartComponent.items.length==null || CartComponent.items.length==0){
      this.noitems=true;
      this.route.navigateByUrl('/user')
    }
    else{
    this.noitems=false;
    if(this.totalprice==0){
      alert("Please select Quantity");
    }
    for(let i=0;i<this.totalprice.length;i++){
      this.fullprice=this.totalprice[i]+this.fullprice;
    }
    this.service.postOrder(CartComponent.items).subscribe(data=>{
      this.afterorder=data;
      alert("Your order has been successfully placed and total price is "+this.fullprice)
    })
    }
  }
}
