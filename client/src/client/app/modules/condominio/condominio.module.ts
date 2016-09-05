import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CondominioComponent } from './condominio.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [CondominioComponent],
  providers: [],
  exports: [CondominioComponent]

})

export class CondominioModule { 
	constructor(public USER: UserService) {}
}
