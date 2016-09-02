import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [HomeModule],
  declarations: [],
  providers: [],
  exports: [HomeModule]

})

export class ModModule {
	constructor(){
		console.log("Cargando Modulos...");
	}
}
