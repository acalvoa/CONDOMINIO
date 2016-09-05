import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'administrador-app',
  templateUrl: 'administrador.component.html',
  styleUrls: ['administrador.component.css'],
})
export class AdministradorComponent {
	cityname:any[];
	comunaname:any[];
	data:any[];
	paramSelected:any = {
		ciudad: "",
		comuna: ""
	}
	formData:Administrador;
  	constructor(private sails:SailsService) {
  		this.formData = new Administrador;
  		this.fetch();
  		this.fetchcity();
  		this.fetchcomuna();
  	}
  	fetch(){
  		this.sails
        .get('/administradores',{
        })
        .subscribe(
            (resData) => {
            	this.data = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	fetchcity(){
  		this.sails
        .get('/ciudad',{
        })
        .subscribe(
            (resData) => {
            	this.cityname = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	fetchcomuna(){
  		this.sails
        .get('/comuna',{
        })
        .subscribe(
            (resData) => {
            	this.comunaname = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	newadmin(){
  		this.sails
        .post('/administradores',this.formData)
        .subscribe(
            (resData) => {
            	resData.ciudad = {
            		nombre: this.paramSelected.ciudad,
            		id: resData.ciudad
            	}
            	resData.comuna = {
            		nombre: this.paramSelected.comuna,
            		id: resData.comuna
            	}
            	let newadm = this.data.concat([resData]);
            	this.data = newadm;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	clean(){
  		this.formData = new Administrador;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/administradores',{
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
  	paramChange(param:number,item:any){
  		if(param==1){
  			this.paramSelected.ciudad = item.selectedOptions[0].innerHTML;
  		}
  		else if(param==2){
  			this.paramSelected.comuna = item.selectedOptions[0].innerHTML;
  		}
  	}
}
class Administrador{
	nombreEmpresa:string = "";
    rutEmpresa:string = "";
    razonSocial:string = "";
    fono:string = "";
    email:string = "";
    direccion:string = "";
    ciudad:number = -1;
    comuna:number = -1;
    url:string = "";
}