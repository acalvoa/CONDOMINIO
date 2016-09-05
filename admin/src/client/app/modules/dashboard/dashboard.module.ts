import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [DashboardComponent],
  providers: [],
  exports: [DashboardComponent]

})

export class DashboardModule { 
	constructor(public USER: UserService) {}
}
