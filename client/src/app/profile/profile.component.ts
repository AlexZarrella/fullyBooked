import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'
import { ActivatedRoute } from '@angular/router';
import { IfStmt } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  theActualUser:any = {};
  theError:any;
  freelance:Array<any> = [];
  arrayOfJobs:Array<any> = [];
  theActualEntry:any;
  weeklySchedule:any = {
     
     monday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],

    tuesday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],

  wednesday:  [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],

    thursday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],

    friday:   [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],

    saturday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],

    sunday:   [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
              {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
              {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
              {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
              {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
              {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
            };
    

  constructor(private bookedService: BookedService,
    private theRouter: ActivatedRoute,
  ) { }
  successCallback(userObject){
    this.theActualUser = userObject;
    this.weeklySchedule = userObject.weeklySchedule;
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username:'', password:''};
  }

  getJobs(){
    this.bookedService.getJobs()
    .subscribe(
      (res)=>{this.arrayOfJobs = res},
      (err)=>{this.theError = err}
    )
  }
  checkIfLoggedIn(){
    this.bookedService.isLoggedIn()
    .subscribe(
      res =>{this.successCallback(res)},
      err =>{this.errorCallback(null)}
    )

    

  }

  // editJobs(){
  //   this.bookedService.editJobs()

  // }
  deleteJob(){
    this.theRouter.params
    .subscribe((params) => {
      this.bookedService.deleteJob(params['id'])
      .subscribe((theEntryToDelete)=>{
        err =>{this.errorCallback(null)}
      })
    })
  }

  addSlot(index, day, e){
    if(this.weeklySchedule[day][index].value){
      this.bookedService.removeSlot(index, day)
      .subscribe((res)=>{
        this.checkIfLoggedIn();
      })

    } else { 
      this.bookedService.addSlot(index, day)
      .subscribe((res)=>{
        this.checkIfLoggedIn();
      })
    }
  }



  ngOnInit() {
    this.checkIfLoggedIn();
    this.getJobs();
    
    
  }

}

