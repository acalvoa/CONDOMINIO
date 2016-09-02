import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { UserService } from '../../services/users/user.service';

@NgModule({
  imports: [],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]

})

export class HomeModule { 
	constructor(public USER: UserService) {}
}
