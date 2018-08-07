import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { RouterModule, Routes } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class BookedService {

  constructor(private http:Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {}, {withCredentials: true} )
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
    .map(res => {
      return  JSON.parse((<any>res)._body)
    })
      .catch(this.handleError);
  }

  deleteJob(deletedTask) {
    return this.http.post('http://localhost:3000/api/private/profile/services/' + deletedTask + '/delete', {} )
    .map((res)=> res.json);
  }

  editJob(editid, theNewObject) {
    return this.http.post('http://localhost:3000/api/private/profile/services/' + editid + '/edit', theNewObject)
    .map((res)=> res.json);
  }

  newService(newServiceEntry, id) {
    return this.http.post(`http://localhost:3000/api/private/profile/services/create`, newServiceEntry, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  updateUser(theNewObject) {
    return this.http.post('http://localhost:3000/api/private/profile/edituser', theNewObject)
    .map((res)=> res.json);
  }

  getJobs(){
    return this.http.get(`http://localhost:3000/api/private/userjobs`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }
  getOneService(entryId) {
    return this.http.get('http://localhost:3000/api/private/profile/services/' + entryId, {withCredentials: true})
      .map((res) => res.json());
  }

  addSlot(index, day) {
    return this.http.post(`http://localhost:3000/api/private/addtimes`, {index: index, day: day},{withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  removeSlot(index, day) {
    return this.http.post(`http://localhost:3000/api/private/removetimes`, {index: index, day: day},{withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  // getProfile(id){
  //   return this.http.post(`http://localhost:3000/api/private/${id}/profile`, {withCredentials: true})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }




}
