import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FoodzapserviceService } from '../foodzapservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editusercomp',
  templateUrl: './editusercomp.component.html',
  styleUrls: ['./editusercomp.component.css']
})
export class EditusercompComponent implements OnInit {
  data:any;
  constructor(private service:FoodzapserviceService,private route:ActivatedRoute ) { }
  id:any;
  
  public async findData(){
    this.route.params.subscribe(data=>{
      let adminid=data['id'];
      this.id={
        id:adminid
      }
  })
  if((this.id)!=0){
    this.service.editConsumerData(this.id).subscribe((data:any)=>{
      this.registeruserform=new FormGroup({
        id:new FormControl(data.id),
        firstname:new FormControl(data['firstname'],[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
        lastname: new FormControl(data['lastname'],[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
        mobileno:new FormControl(data['mobileno'],[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[0-9]+")]),
        address1:new FormControl(data['address1'],[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
        address2:new FormControl(data['address2'],[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
        city:new FormControl(data['city'],[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]),
        pincode:new FormControl(data.pincode,[Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern("[0-9]+")]),
        password:new FormControl(data.foodzapusers.password,[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z0-9$#@!%^&*?]+")]),
        foodzapusers:new FormControl(data.foodzapusers)
      })
    })
  }
  }

  async ngOnInit(){
    await this.findData();
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
    this.service.postUpdateConsumer(this.registeruserform.value).subscribe((data:any)=>{
      this.data=data;
      if(data!=null){
        alert("Your details are successfully saved,Your user name is "+this.data.firstname+" "+this.registeruserform.value.lastname)
      }
      this.registeruserform.reset();
    })
    let user={
      name:this.registeruserform.value.firstname+" "+this.registeruserform.value.lastname,
      password:this.registeruserform.value.password,
      role:"user"
    }
    this.service.postUser(user).subscribe(data=>{
      this.data=data;
    })
  }

  goBack(){
    this.service.goBack();
    }
}
 


