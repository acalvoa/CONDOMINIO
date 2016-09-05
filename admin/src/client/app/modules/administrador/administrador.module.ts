import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdministradorComponent } from './administrador.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [AdministradorComponent],
  providers: [],
  exports: [AdministradorComponent]

})

export class AdministradorModule { 
	constructor(public USER: UserService) {}
}
