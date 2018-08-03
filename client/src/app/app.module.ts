import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookedService } from './services/booked.service';
import { SignupComponent } from './signup/signup.component';
import { CreateServiceComponent } from './create-service/create-service.component';

const routes:Routes = [
  { path: '', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'services/create', component: CreateServiceComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    CreateServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
