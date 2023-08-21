import { Component, OnInit } from '@angular/core';
import { FoodzapserviceService } from '../foodzapservice.service';
import { CoolLocalStorage } from '@angular-cool/storage';


@Component({
  selector: 'app-breakfastcomp',
  templateUrl: './breakfastcomp.component.html',
  styleUrls: ['./breakfastcomp.component.css']
})
export class BreakfastcompComponent implements OnInit {
  str:any=[];
  mydata:any;
  public static arrdata:any=[];
  items:any;
  breakfastitems:any=[];
  url:string[]=[];
  constructor(private service:FoodzapserviceService,private local:CoolLocalStorage) { }

    ngOnInit():void{
    this.service.getAllItems().subscribe(data=>{
      this.items=data;
      for (let index = 0; index < this.items.length; index++) {
        if(this.items[index].imagename.startsWith("C:")){
          this.str=this.items[index].imagename.split("C:\\fakepath\\");
          this.items[index].imagename=this.str[1];
        }
       if(this.items[index].itemtype=="breakfast"){
         this.breakfastitems.push(this.items[index])
         this.url.push("/assets/"+this.items[index].imagename);
        }
      }
    })
  }
  addToCart(data:any){
    this.mydata={
      "restaurantrating": data.restaurantrating,
      "itemname": data.itemname,
      "itemtype": "breakfast",
      "restaurantname": data.restaurantname,
      "price": data.price,
      "quantity": null,
      "restaurantlocation": data.restaurantlocation,
    }
    BreakfastcompComponent.arrdata.push(this.mydata);
    sessionStorage.setItem("consumeritems",JSON.stringify(BreakfastcompComponent.arrdata));
  }
}
  





