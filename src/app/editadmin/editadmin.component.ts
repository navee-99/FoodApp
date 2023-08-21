import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { FoodzapserviceService } from '../foodzapservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {

  constructor(private service:FoodzapserviceService,private route:ActivatedRoute) { }
  data:any;
  id:any;
  
  public async findData(){
    this.route.params.subscribe(data=>{
      let adminid=data['id'];
      this.id={
        id:adminid
      }
  })
  if((this.id)!=0){
    this.service.editAdminData(this.id).subscribe((data:any)=>{
      
      this.registeradminform=new FormGroup({
        id:new FormControl(data.id),
        firstname:new FormControl(data['firstname'],[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
        lastname: new FormControl(data['lastname'],[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
        phoneno:new FormControl(data['phoneno'],[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[0-9]+")]),
        emailid:new FormControl(data['emailid'],[Validators.required,Validators.pattern("([\.\_a-zA-Z0-9_]+)@([a-zA-Z]+)\\.([a-zA-Z]){2,4}")]),
        addressline1:new FormControl(data['addressline1'],[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
        addressline2:new FormControl(data['addressline2'],[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
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
  registeradminform=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
    lastname: new FormControl("",[Validators.required,Validators.maxLength(20),Validators.pattern("[a-zA-Z ]+")]),
    phoneno:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[0-9]+")]),
    emailid:new FormControl("",[Validators.required,Validators.pattern("([\.\_a-zA-Z0-9_]+)@([a-zA-Z]+)\\.([a-zA-Z]){2,4}")]),
    addressline1:new FormControl("",[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
    addressline2:new FormControl("",[Validators.pattern("[,a-zA-Z0-9 ]+"),Validators.required,Validators.maxLength(40),Validators.minLength(5)]),
    city:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]),
    pincode:new FormControl("",[Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern("[0-9]+")]),
    password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z0-9$#@!%^&*?]+")]),
    
  })

  goBack(){
    this.service.goBack();
    
  }

  postAdmin(){
    this.service.postUpdateAdmin(this.registeradminform.value).subscribe((data:any)=>{
      this.data=data;
      if(data!=null){
        alert("Your details are successfully saved,Your username is "+this.data.firstname+" "+this.registeradminform.value.lastname)
      }
      this.registeradminform.reset();
    })
  }
}
