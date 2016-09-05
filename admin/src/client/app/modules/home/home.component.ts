import { Component } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { Router} from '@angular/router';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'home-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent {
  	selectedMenu = {};
  	category = [{
  		name: 'Dashboard',
  		activate: true
  	},{
  		name: 'Condominios',
  		activate: false,
  		child:[
        {name:'Condominios', route:'/admin/condominio'},
  			{name:'Edificios', route:'/admin/edificio'},
  			{name:'Departamentos', route:'/admin/departamento'},
  			{name:'Estacionamientos', route:'/admin/estacionamiento'},
  			{name:'Bodegas', route:'/admin/bodega'},
  		]
  	},{
  		name: 'Administradores',
  		activate: false,
  		child:[
  			{name:'Administradores', route:'/admin/administrador'},
        {name:'Conserjes', route:'/admin/conserje'},
  		]
  	},{
  		name: 'Areas Geograficas',
  		activate: false,
  		child:[
  			{name:'Ciudades', route:'/admin/ciudad'},
  			{name:'Comunas', route:'/admin/comuna'},
  		]
  	},{
      name: 'Personas',
      activate: false,
      child:[
        {name:'Residentes', route:'/admin/residentes'},
      ]
    }];
  	constructor(private user:UserService, private router:Router) {
  		this.selectedMenu = this.category[0];
  	}
  	logout(){
  		if(this.user.removeAuth()){
  			this.router.navigate(['']);
  		}
  	} 
  	changeOption(menu:any){
  		this.selectedMenu = menu;
  	}
}
