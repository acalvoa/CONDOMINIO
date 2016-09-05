import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EstacionamientoComponent } from './estacionamiento.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [EstacionamientoComponent],
  providers: [],
  exports: [EstacionamientoComponent]

})

export class EstacionamientoModule { 
	constructor(public USER: UserService) {}
}
