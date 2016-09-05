import { Routes } from '@angular/router';

import { HomeComponent } from './modules/index';
import { DashboardComponent } from './modules/index';
import { LoginComponent } from './modules/index';
import { ActivateProv } from './services/index'

import { ModRoutes } from './modules/mod.routes';

export const routes: Routes = [
	{
  	path: '*patch',
  	component: HomeComponent,
	},
	{
  	path: '',
  	component: HomeComponent,
  	canActivate: [ActivateProv]
	},
	{
  	path: 'login',
  	component: LoginComponent
	},
	...ModRoutes
];
