import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'departamento-app',
  templateUrl: 'departamento.component.html',
  styleUrls: ['departamento.component.css'],
})

export class DepartamentoComponent {
  	edificioname:any[];
  	edificioSelected:string;
	data:any[];
	formData:Departamento;
  	constructor(private sails:SailsService) {
  		this.formData = new Departamento;
  		this.fetch();
  		this.fetchedificio();
  	}
  	fetch(){
  		this.sails
        .get('/departamento',{
        })
        .subscribe(
            (resData) => {
            	this.data = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	fetchedificio(){
  		this.sails
        .get('/edificio',{
        })
        .subscribe(
            (resData) => {
            	this.edificioname = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	newdepart(){
  		this.sails
        .post('/departamento',this.formData)
        .subscribe(
            (resData) => {
            	resData.edificio = {
            		nombre: this.edificioSelected,
            		id: resData.edificio
            	}
            	let newadm = this.data.concat([resData]);
            	this.data = newadm;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	clean(){
  		this.formData = new Departamento;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/departamento',{
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
  	edificio(item:any){
  		this.edificioSelected = item.selectedOptions[0].innerHTML;
  	}
}
class Departamento{
	numero:number;
	metrosCuadrados:string = ""
	cantidadBanos:number;
	cantidadPiezas:number;
	walkInCloset:boolean = true;
	edificio:number = -1;
	porcentajeDominio:number;
}