import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodegaComponent } from './bodega.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [BodegaComponent],
  providers: [],
  exports: [BodegaComponent]

})

export class BodegaModule { 
	constructor(public USER: UserService) {}
}
