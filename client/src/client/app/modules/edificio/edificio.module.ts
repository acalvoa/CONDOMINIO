import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EdificioComponent } from './edificio.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [EdificioComponent],
  providers: [],
  exports: [EdificioComponent]

})

export class EdificioModule { 
	constructor(public USER: UserService) {}
}
