import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  constructor(private bookedService: BookedService,
    private theRouter: ActivatedRoute,
    private router : Router) { }

    theUpdatedJob:any = {};
    theOneJob:any = {};

  ngOnInit() {
    this.theRouter.params
    .subscribe((params)=>{
      this.bookedService.getOneService(params['id'])
      .subscribe((theJob)=>{
        console.log(theJob)
        this.theOneJob.category = theJob.category;
        this.theOneJob.description = theJob.description;
        this.theOneJob.pricing = theJob.pricing;
      })
    })
  }

  editJob(){
    this.theRouter.params
    .subscribe((params)=>{
      this.bookedService.editJob(params['id'], this.theUpdatedJob)
      .subscribe((theEditedJob)=>{
        this.router.navigate([`/private/profile`])
      })
    })
  }
}
