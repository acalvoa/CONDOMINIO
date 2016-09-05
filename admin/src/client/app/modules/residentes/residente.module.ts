import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResidentesComponent } from './residente.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [ResidentesComponent],
  providers: [],
  exports: [ResidentesComponent]

})

export class ResidentesModule { 
	constructor(public USER: UserService) {}
}
