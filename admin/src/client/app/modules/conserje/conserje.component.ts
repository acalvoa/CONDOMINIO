import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'conserje-app',
  templateUrl: 'conserje.component.html',
  styleUrls: ['conserje.component.css'],
})

export class ConserjeComponent {
	cityname:any[];
	comunaname:any[];
	data:any[];
	paramSelected:any = {
		ciudad: "",
		comuna: ""
	}
	formData:Conserje;
  	constructor(private sails:SailsService) {
  		this.formData = new Conserje;
  		this.fetch();
  		this.fetchcity();
  		this.fetchcomuna();
  	}
  	fetch(){
  		this.sails
        .get('/conserjes',{
        })
        .subscribe(
            (resData) => {
            	console.log(resData);
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
  	newconserje(){
  		this.sails
        .post('/conserjes',this.formData)
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
  		this.formData = new Conserje;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/conserjes',{
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
class Conserje {
	rut:string = "";
	nombres:string = "";
    apellido_paterno:string = "";
    apellido_materno:string = "";
    genero:string = "M";
    fono:string = "";
    email:string = "";
    direccion:string = "";
    ciudad:number = -1;
    comuna:number = -1;
    activo:boolean = true;
}