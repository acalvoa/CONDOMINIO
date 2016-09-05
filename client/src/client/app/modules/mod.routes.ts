import { Routes } from '@angular/router';

import { HomeComponent } from './index';
import { DashboardComponent } from './index';
import { CiudadComponent, LoginComponent, ComunaComponent, EdificioComponent, 
		CondominioComponent,AdministradorComponent, ConserjeComponent, DepartamentoComponent, 
		EstacionamientoComponent, BodegaComponent} from './index';
import { ActivateProv } from '../services/index';

export const ModRoutes: Routes = [
	{
	  	path: 'admin',
	  	component: HomeComponent,
	    // canActivate: [ActivateProv],
	  	children: [
	  	  { path: '',  component: DashboardComponent},
	  	  { path: 'edificio',  component: EdificioComponent},
	  	  { path: 'departamento',  component: DepartamentoComponent},
	  	  { path: 'administrador',  component: AdministradorComponent},
	  	  { path: 'condominio',  component: CondominioComponent},
	  	  { path: 'estacionamiento',  component: EstacionamientoComponent},
	  	  { path: 'bodega',  component: BodegaComponent},
	  	  { path: 'conserje',  component: ConserjeComponent},
	  	  { path: 'ciudad',  component: CiudadComponent},
	  	  { path: 'comuna',  component: ComunaComponent}
    	]
	}
];
