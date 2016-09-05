import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'edificio-app',
  templateUrl: 'edificio.component.html',
  styleUrls: ['edificio.component.css'],
})

export class EdificioComponent {
	condname:any[];
	condSelected:string;
	data:any[];
	formData:Edificio;
  	constructor(private sails:SailsService) {
  		this.formData = new Edificio;
  		this.fetch();
  		this.fetchcond();
  	}
  	fetch(){
  		this.sails
        .get('/edificio',{
        })
        .subscribe(
            (resData) => {
            	this.data = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	fetchcond(){
  		this.sails
        .get('/condominio',{
        })
        .subscribe(
            (resData) => {
            	this.condname = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	newedificio(){
  		this.sails
        .post('/edificio',this.formData)
        .subscribe(
            (resData) => {
            	resData.condominio = {
            		nombre: this.condSelected,
            		id: resData.condominio
            	}
            	let newadm = this.data.concat([resData]);
            	this.data = newadm;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	clean(){
  		this.formData = new Edificio;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/edificio',{
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
  	condChange(item:any){
  		this.condSelected = item.selectedOptions[0].innerHTML;
  	}
}
class Edificio{
	nombre:string = "";
	cantidadPisos:string = "";
	condominio:any = -1;
}
