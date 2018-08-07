import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BookedService } from '../services/booked.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpUser:any = {};

  theActualUser:any = {};

  theError:any;

  constructor(private  bookedService: BookedService, 
    private router : Router,
    private myRoutes : ActivatedRoute ) { }

  tryToSignUp(){
    console.log(this.signUpUser)
    this.bookedService.signup(this.signUpUser)
    .subscribe(
      res =>{ this.successCallback(res), this.router.navigate(['']) },
      error=>{this.errorCallback(error)},
      
    );
  }

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username:'', password:''};
  }


  ngOnInit() {
   
  }

}
