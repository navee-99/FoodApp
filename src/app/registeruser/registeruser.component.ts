import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FoodzapserviceService } from '../foodzapservice.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  
  data:any;
  constructor(private service:FoodzapserviceService) { }

  ngOnInit(): void {
  }
  registeruserform=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
    lastname: new FormControl("",[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
    mobileno:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[0-9]+")]),
    address1:new FormControl("",[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
    address2:new FormControl("",[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
    city:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]),
    pincode:new FormControl("",[Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern("[0-9]+")]),
    password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z0-9$#@!%^&*?]+")]),
  })
  
  postUser(){
    this.service.postConsumer(this.registeruserform.value).subscribe((data:any)=>{
      this.data=data;
      if(data!=null){
        alert("Your details are successfully saved,Your user name is "+this.data.firstname+" "+this.registeruserform.value.lastname)
      }
      this.registeruserform.reset();
    })
  }
  goBack(){
    this.service.goBack();
  }
}
 


