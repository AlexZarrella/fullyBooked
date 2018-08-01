import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BookedService } from '../services/booked.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signUpUser:any = {};

  theActualUser:any = {};

  loginUser:any={};

  theError:any;
  constructor(private bookedService: BookedService) { }

  tryToSignUp(){
    this.bookedService.signup(this.signUpUser)
    .subscribe(
      res =>{ this.successCallback(res)},
      error=>{this.errorCallback(error)}
    );
  }

  tryToLogIn(){
    console.log(this.loginUser);
    this.bookedService.login(this.loginUser)
    .subscribe(
      res =>{ this.successCallback(res) },
      err =>{this.errorCallback(err)}
    );
  }

  logMeOut(){
    this.bookedService.logout()
    .subscribe(res =>{ this.theActualUser = {} })
  }

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username:'', password:''};
  }

  checkIfLoggedIn(){
    this.bookedService.isLoggedIn()
    .subscribe(
      res =>{this.successCallback(res)},
      err =>{this.errorCallback(null)}
    )
  }



  ngOnInit() {
  }

}
