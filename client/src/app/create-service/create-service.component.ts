import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  constructor(private services: BookedService) { }

  ngOnInit() {
  }

  newServiceInfo:any = {};

  newServiceEntry(){
    this.services.newService(this.newServiceInfo)
    .subscribe((entry)=>{
      
    })
  }

}
