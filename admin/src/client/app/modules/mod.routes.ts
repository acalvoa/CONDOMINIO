import { Routes } from '@angular/router';

import { HomeComponent } from './index';
import { DashboardComponent } from './index';
import { CiudadComponent, LoginComponent, ComunaComponent, EdificioComponent, 
		CondominioComponent,AdministradorComponent, ConserjeComponent, DepartamentoComponent, 
		EstacionamientoComponent, BodegaComponent, ResidentesComponent} from './index';
import { ActivateProv } from '../services/index';

export const ModRoutes: Routes = [
	{
	  	path: 'admin',
	  	component: HomeComponent,
	    // canActivate: [ActivateProv],
	  	children: [
	  	  { path: '',  component: DashboardComponent , canActivate: [ActivateProv]},
	  	  { path: 'edificio',  component: EdificioComponent, canActivate: [ActivateProv]},
	  	  { path: 'residentes',  component: ResidentesComponent},
	  	  { path: 'departamento',  component: DepartamentoComponent, canActivate: [ActivateProv]},
	  	  { path: 'administrador',  component: AdministradorComponent, canActivate: [ActivateProv]},
	  	  { path: 'condominio',  component: CondominioComponent, canActivate: [ActivateProv]},
	  	  { path: 'estacionamiento',  component: EstacionamientoComponent, canActivate: [ActivateProv]},
	  	  { path: 'bodega',  component: BodegaComponent, canActivate: [ActivateProv]},
	  	  { path: 'conserje',  component: ConserjeComponent, canActivate: [ActivateProv]},
	  	  { path: 'ciudad',  component: CiudadComponent, canActivate: [ActivateProv]},
	  	  { path: 'comuna',  component: ComunaComponent, canActivate: [ActivateProv]}
    	]
	}
];
