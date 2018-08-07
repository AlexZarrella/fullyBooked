import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  theActualUser:any = {};
  theError:any;

  constructor(private services: BookedService,
    private router : Router,
    private myRoutes : ActivatedRoute ) { }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  newServiceInfo:any = {};

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username:'', password:''};
  }

  checkIfLoggedIn(){
    this.services.isLoggedIn()
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(null)}
    )
  }

  // newServiceEntry(id){
  //   this.services.newService(this.newServiceInfo, id)
  //   .subscribe((entry)=>{
  //     res =>{this.successCallback(res), this.router.navigate([`/private/profile`]) } },
  //     err => {this.errorCallback(err)}
  //   )
  //   }

  newServiceEntry(id){
    // console.log(this.loginUser);
    // console.log(this.router)
    this.services.newService(this.newServiceInfo, id)
    .subscribe(
      res => { this.successCallback(res), this.router.navigate([`/private/profile`]) },
      err => {this.errorCallback(err)}
    );
  }
}


