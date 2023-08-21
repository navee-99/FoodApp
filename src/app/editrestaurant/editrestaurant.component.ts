import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FoodzapserviceService } from '../foodzapservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent implements OnInit {
  str:any;
  data:any;
  myurl:any;
  id:any;
  oneItem:any;
  constructor(private service:FoodzapserviceService,private route:ActivatedRoute) { }
  
  async ngOnInit(){
    await this.findData();
  }
  public async findData() {
    this.route.params.subscribe(data=>{
      let restid=data['id'];
      this.id={
        id:restid
      }
    })
    this.service.getItemById(this.id).subscribe(res=>{
    this.oneItem=res;
    this.restaurantform=new FormGroup({
    id:new FormControl(this.oneItem.id),
    itemname:new FormControl(this.oneItem.itemname,[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z ]+")]),
    itemtype: new FormControl(this.oneItem.itemtype,[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z ]+")]),
    restaurantname:new FormControl(this.oneItem.restaurantname,[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z ]+")]),
    price:new FormControl(this.oneItem.price,[Validators.pattern("[0-9. ]+"),Validators.required,Validators.maxLength(15)]),
    restaurantlocation:new FormControl(this.oneItem.restaurantlocation,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]),
    restaurantrating:new FormControl(this.oneItem.restaurantrating,[Validators.required,Validators.pattern("[0-9.]+")]),
    imagename:new FormControl(this.oneItem.imagename,[Validators.required]),
  })
})
}
  restaurantform=new FormGroup({
  itemname:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z ]+")]),
  itemtype: new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z ]+")]),
  restaurantname:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern("[a-zA-Z ]+")]),
  price:new FormControl("",[Validators.pattern("[0-9. ]+"),Validators.required,Validators.maxLength(15)]),
  restaurantlocation:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]),
  restaurantrating:new FormControl("",[Validators.required,Validators.pattern("[0-9.]+")]),
  imagename:new FormControl("",[Validators.required]),
  })

  postItems(){
    this.service.updateItems(this.restaurantform.value).subscribe((data:any)=>{
      this.data=data;
      if(data!=null){
        alert("Your details are successfully saved")
      }
      this.restaurantform.reset();
    })
  }

  goBack(){
    this.service.goBack();
    }

  uploadImage(data:any){
    if(data.target.files){
      this.restaurantform.value.imagename=data.target.files[0].name;
    }
  }

  findItemType(data:any){
   this.restaurantform.value.imagename=data.target.value
  }
}


