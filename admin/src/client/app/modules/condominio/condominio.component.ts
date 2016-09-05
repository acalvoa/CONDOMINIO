import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'condominio-app',
  templateUrl: 'condominio.component.html',
  styleUrls: ['condominio.component.css'],
})

export class CondominioComponent {
  	cityname:any[];
	comunaname:any[];
	adminname:any[];
	paramSelected:any = {
		ciudad: "",
		comuna: "",
		admin: ""
	}
	data:any[];
	formData:Condominio;
  	constructor(private sails:SailsService) {
  		this.formData = new Condominio;
  		this.fetch();
  		this.fetchcity();
  		this.fetchadmin();
  		this.fetchcomuna();
  	}
  	fetch(){
  		this.sails
        .get('/condominio',{
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
  	fetchadmin(){
  		this.sails
        .get('/administradores',{
        })
        .subscribe(
            (resData) => {
            	this.adminname = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	newcondominio(){
  		this.sails
        .post('/condominio',this.formData)
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
            	resData.administradorEdificio = {
            		nombreEmpresa: this.paramSelected.admin,
            		id: resData.administradorEdificio
            	}
            	let newadm = this.data.concat([resData]);
            	this.data = newadm;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	clean(){
  		this.formData = new Condominio;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/condominio',{
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
  		else if(param==3){
  			this.paramSelected.admin = item.selectedOptions[0].innerHTML;
  		}
  	}
}
class Condominio{
	nombre:string = "";
    fono:string = "";
    direccion:string = "";
    reglamento:string = "";
    ciudad:number = -1;
    comuna:number = -1;
    administradorEdificio:number = -1;
}
