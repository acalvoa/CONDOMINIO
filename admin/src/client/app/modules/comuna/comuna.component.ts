import { Component } from '@angular/core';
import {DataTable} from 'angular2-datatable/datatable';
import { SailsService } from 'angular2-sails';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'comuna-app',
  templateUrl: 'comuna.component.html',
  styleUrls: ['comuna.component.css'],
})

export class ComunaComponent {
  	private cityname: any[];
  	private comuna:String;
	private city: number;
	paramSelected:any = {
		ciudad: ""
	}
	public data: any[] = [];
  	constructor(private sails:SailsService) {
  		this.comuna = "";
  		this.city = -1;
  		this.fetch();
  		this.fetchcity();
  	}
  	newcomuna(){
  		this.sails
        .post('/comuna',{
        	nombre: this.comuna,
        	ciudad: this.city
        })
        .subscribe(
            (resData) => {
            	resData.ciudad = {
            		nombre: this.paramSelected.ciudad,
            		id: resData.ciudad
            	}
            	let newcity = this.data.concat([resData]);
            	this.data = newcity;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	fetch(){
  		this.sails
        .get('/comuna',{
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
  	clean(){
  		this.comuna = "";
  		this.city = -1;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/comuna',{
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
  	}
}
