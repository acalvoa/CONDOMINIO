import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConserjeComponent } from './conserje.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [ConserjeComponent],
  providers: [],
  exports: [ConserjeComponent]

})

export class ConserjeModule { 
	constructor(public USER: UserService) {}
}
