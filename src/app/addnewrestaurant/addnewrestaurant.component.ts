import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FoodzapserviceService } from '../foodzapservice.service';

@Component({
  selector: 'app-addnewrestaurant',
  templateUrl: './addnewrestaurant.component.html',
  styleUrls: ['./addnewrestaurant.component.css']
})
export class AddnewrestaurantComponent implements OnInit {
  str:any;
  data:any;
  myurl:any;
  constructor(private service:FoodzapserviceService) { }

  ngOnInit(): void {
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
    this.service.postItems(this.restaurantform.value).subscribe((data:any)=>{
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
