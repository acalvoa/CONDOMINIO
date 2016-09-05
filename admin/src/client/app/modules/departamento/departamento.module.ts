import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DepartamentoComponent } from './departamento.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [DepartamentoComponent],
  providers: [],
  exports: [DepartamentoComponent]

})

export class DepartamentoModule { 
	constructor(public USER: UserService) {}
}
class Departamento{
	numero:number;
	metrosCuadrados:string = ";"
	cantidadBanos:number;
	cantidadPiezas:number;
	walkInCloset:boolean = true;
	edificio:number;
	porcentajeDominio:number;
}