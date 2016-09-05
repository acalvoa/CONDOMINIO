import { Component } from '@angular/core';
import {DataTable} from 'angular2-datatable/datatable';
import { SailsService } from 'angular2-sails';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'ciudad-app',
  templateUrl: 'ciudad.component.html',
  styleUrls: ['ciudad.component.css'],
})

export class CiudadComponent {
	private cityname: String;
	public data: any[] = [
	];
  	constructor(private sails:SailsService) {
  		this.fetch();
  		this.cityname = "";
  	}
  	newcity(){
  		this.sails
        .post('/ciudad',{
        	nombre: this.cityname
        })
        .subscribe(
            (resData) => {
            	let newcity = this.data.concat([resData]);
            	this.data = newcity;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	fetch(){
  		this.sails
        .get('/ciudad',{
        })
        .subscribe(
            (resData) => {
            	this.data = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	clean(){
  		this.cityname = "";
  	}
  	destroy(item:any){
  		this.sails
        .delete('/ciudad',{
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
