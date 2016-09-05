import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './users/user.service';
import { ActivateProv } from './users/activate.provi';
import { SailService } from './sails/ssails.service';
import { SailsService } from 'angular2-sails';

@NgModule({
  imports: [],
  declarations: [],
  providers: [UserService, SailService, SailsService, ActivateProv],
  exports: []
})

export class ServicesModule {
	constructor(){
		console.log("Cargando Servicios...");
	}
}
