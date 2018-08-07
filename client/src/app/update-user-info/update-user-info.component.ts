import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.css']
})
export class UpdateUserInfoComponent implements OnInit {

  constructor(private bookedService: BookedService,
    private theRouter: ActivatedRoute,
    private router : Router) { }

    theUpdatedUser:any = {};
    theActualUser:any= {};
    theError:any;

    ngOnInit() {
        this.bookedService.updateUser(this.theUpdatedUser)
        .subscribe((theUser: any)=>{
          console.log(theUser)
          this.theActualUser.username = theUser.username;
          this.theActualUser.description = theUser.description;
          this.theActualUser.name = theUser.name;
          this.theActualUser.email = theUser.email;
          this.theActualUser.location = theUser.location;
        })
        this.checkIfLoggedIn();
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
      res => {this.successCallback(res)},
      err => {this.errorCallback(null)}
    )
  }

  
    editUser(){
      this.bookedService.updateUser(this.theUpdatedUser)
        .subscribe((theEditedUser)=>{
          this.router.navigate([`/private/profile`])
        })
      }
    }
  
