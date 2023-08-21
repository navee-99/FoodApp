import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodzapserviceService } from '../foodzapservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkuser:any;
  user:any;
  userdata:any;
  allconsumers:any=[];
  constructor(private route:Router,private service:FoodzapserviceService) { }

  ngOnInit(): void {
  }
  loginform=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.pattern("[a-zA-z ]+")]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  })

  submit(){
    if(this.loginform.value.username==''||this.loginform.value.password==''){
      alert("Please enter valid credentials")
    }
    else{
      this.user={
      name:this.loginform.value.username,
      password:this.loginform.value.password
      }
      this.service.getAllConsumers().subscribe(consumer=>{
        this.allconsumers=consumer;
        for (let index = 0; index <this.allconsumers.length; index++) {
          if((this.user.name==this.allconsumers[index].foodzapusers.name)&&(this.user.password==this.allconsumers[index].foodzapusers.password)){
            this.userdata=this.allconsumers[index];
            sessionStorage.setItem("consumername",this.userdata.foodzapusers.name);
            sessionStorage.setItem("address",this.userdata.address1+" "+this.userdata.address2)
            sessionStorage.setItem("city",this.userdata.city);
          }
        }
        if(this.userdata==null){
          this.service.findUser(this.user).subscribe(user=>{
          this.checkuser=user;
          if(this.checkuser==null || this.checkuser.role==null){
            alert("Please enter valid username and password")
          }
          if(this.checkuser.role=='admin'){
            this.route.navigateByUrl('admin');
          }
          });
        }
        if(this.userdata!=null&&this.userdata.foodzapusers.role=='user'){
        this.route.navigateByUrl('user');
        }
      })
    }
  }
}
