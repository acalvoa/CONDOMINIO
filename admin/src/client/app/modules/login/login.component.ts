import { Component } from '@angular/core';
import { UserService} from '../../services/users/index';
import { Router } from '@angular/router';
import { SailsService } from 'angular2-sails';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'login-app',
  templateUrl: 'login.component.html',
  styleUrls: [
	'login.component.css'
  ],
})

export class LoginComponent {
  	// VARIABLES
  	username: String;
  	password: String;
  	// DEFINIMOS EL CONSTRUCTOR
  	constructor(private user:UserService, private sails:SailsService, private router:Router) {}
  	// ACCIONES
  	public login(){
		this.sails
        .post('/auth/local',{
         	identifier: this.username,
         	password: this.password
        })
        .subscribe(
            (resData) => {
            	if(resData.status == 1){
            		this.user.regAuth(resData.user);
            		this.router.navigate(['admin/dashboard']);
            	}
            	else
            	{
            		console.log("Ha ocurrido un error");
            	}
            },
            (error) => { console.log("Error occured") }
        )
	}
  	isAuth(){
  		this.user.isAuth();	
  	}

}
