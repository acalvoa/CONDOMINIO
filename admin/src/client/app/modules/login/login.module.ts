import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { UserService } from '../../services/users/user.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  declarations: [LoginComponent],
  providers: [UserService],
  exports: [LoginComponent]

})

export class LoginModule { 
	constructor() {}
}
