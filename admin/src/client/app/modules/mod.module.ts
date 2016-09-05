import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { CiudadComponent, AdministradorComponent} from './index';
import { ComunaComponent, EdificioComponent, CondominioComponent, ConserjeComponent, 
	DepartamentoComponent, EstacionamientoComponent, BodegaComponent,ResidentesComponent} from './index';
import { DataTableDirectives } from 'angular2-datatable/datatable';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [HomeModule, DashboardModule, LoginModule,BrowserModule,FormsModule],
  declarations: [CiudadComponent,ComunaComponent, DataTableDirectives, 
  EdificioComponent, CondominioComponent,AdministradorComponent, ConserjeComponent, 
  DepartamentoComponent, EstacionamientoComponent,BodegaComponent,ResidentesComponent],
  providers: [DataTableDirectives],
  exports: [HomeModule, DashboardModule, LoginModule]

})

export class ModModule {
	constructor(){
		console.log("Cargando Modulos...");
	}
}
