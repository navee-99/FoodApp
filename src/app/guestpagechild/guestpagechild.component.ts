import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestpagechild',
  templateUrl: './guestpagechild.component.html',
  styleUrls: ['./guestpagechild.component.css']
})
export class GuestpagechildComponent implements OnInit {
  login:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  enableLogin(){
    this.login=true
  }

}
