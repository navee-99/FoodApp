import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { FoodzapserviceService } from '../foodzapservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addnewadmin',
  templateUrl: './addnewadmin.component.html',
  styleUrls: ['./addnewadmin.component.css']
})
export class AddnewadminComponent implements OnInit {
  
  constructor(private service:FoodzapserviceService,private route:ActivatedRoute) { }
  data:any;
  ngOnInit():void{
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
      this.service.postAdmin(this.registeradminform.value).subscribe((data:any)=>{
      this.data=data;
      if(data!=null){
        alert("Your details are successfully saved,Your username is "+this.data.firstname+" "+this.registeradminform.value.lastname)
      }
      this.registeradminform.reset();
    })
  }

}
