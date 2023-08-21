import { Component, OnInit } from '@angular/core';
import { FoodzapserviceService } from '../foodzapservice.service';
import { BreakfastcompComponent } from '../breakfastcomp/breakfastcomp.component';

@Component({
  selector: 'app-othermenus',
  templateUrl: './othermenus.component.html',
  styleUrls: ['./othermenus.component.css']
})
export class OthermenusComponent implements OnInit {
  public static othermenudata:any=[];
  mydata:any;
  str:any=[];
  items:any;
  starteritems:any=[];
  maincourseitems:any=[];
  maincourseurl:any=[];
  url:string[]=[];
  validurl:any=[];
  dessertitems: any=[];
  desserturl:any=[];
  juiceitems: any=[];
  juiceurl:any=[];
  dinneritems: any=[];
  dinnerurl:any=[];
  constructor(private service:FoodzapserviceService) { }

  ngOnInit(): void {
     this.service.getAllItems().subscribe(data=>{
       this.items=data;
       for (let index = 0; index < this.items.length; index++) {
         if(this.items[index].imagename.startsWith("C:")){
         this.str=this.items[index].imagename.split("C:\\fakepath\\");
         this.items[index].imagename=this.str[1];
         }
         if(this.items[index].itemtype=="starters"){
         this.starteritems.push(this.items[index]);
         this.url.push("/assets/"+this.items[index].imagename);
         }
         if(this.items[index].itemtype=="maincourse"){
          this.maincourseitems.push(this.items[index]);
          this.maincourseurl.push("/assets/"+this.items[index].imagename);
          }
         if(this.items[index].itemtype=="desserts"){
          this.dessertitems.push(this.items[index]);
          this.desserturl.push("/assets/"+this.items[index].imagename);
          }
         if(this.items[index].itemtype=="juices"){
          this.juiceitems.push(this.items[index]);
          this.juiceurl.push("/assets/"+this.items[index].imagename);
          }
         if(this.items[index].itemtype=="dinner"){
          this.dinneritems.push(this.items[index]);
          this.dinnerurl.push("/assets/"+this.items[index].imagename);
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
