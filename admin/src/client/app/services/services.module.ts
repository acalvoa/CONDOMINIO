import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './users/user.service';
import { SailService } from './sails/ssails.service';
import { SailsService } from 'angular2-sails';

@NgModule({
  imports: [],
  declarations: [],
  providers: [UserService, SailService, SailsService],
  exports: []
})

export class ServicesModule {
	constructor(){
		console.log("Cargando Servicios...");
	}
}
