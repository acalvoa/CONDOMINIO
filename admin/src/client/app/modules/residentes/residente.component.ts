import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'residente-app',
  templateUrl: 'residente.component.html',
  styleUrls: ['residente.component.css'],
})
export class ResidentesComponent {
	data:any[];
	formData:Residentes;
  	constructor(private sails:SailsService) {
  		this.formData = new Residentes;
  		this.fetch();
  	}
  	fetch(){
  		this.sails
        .get('/residente',{
        })
        .subscribe(
            (resData) => {
            	this.data = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	newresidente(){
  		this.sails
        .post('/residente',this.formData)
        .subscribe(
            (resData) => {
            	let newadm = this.data.concat([resData]);
            	this.data = newadm;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	clean(){
  		this.formData = new Residentes;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/residente',{
        	id: item.id
        })
        .subscribe(
            (resData) => {
            	let newcity = this.data.slice(0,this.data.length); 
            	var index = this.data.indexOf(item);
            	newcity.splice(index, 1);
            	this.data = newcity;
            	
            },
            (error) => { console.log("Error occured") }
        )
  	}
}
class Residentes{
  	rut:string = "";
    nombres:string = "";
    apellido_paterno:string = "";
    apellido_materno:string = "";
    gender_choice:string = "M";
    fono:string = "";
    email:string = "";
    fecha_ingreso:string = "";
    activo:boolean = true;
}