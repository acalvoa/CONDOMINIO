import { Component } from '@angular/core';
import { SailsService } from 'angular2-sails';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'bodega-app',
  templateUrl: 'bodega.component.html',
  styleUrls: ['bodega.component.css'],
})

export class BodegaComponent {
  	departamentoname:any[];
  	departamentoSelected:string;
	data:any[];
	formData:Bodega;
  	constructor(private sails:SailsService) {
  		this.formData = new Bodega;
  		this.fetch();
  		this.fetchdepartament();
  	}
  	fetch(){
  		this.sails
        .get('/bodega',{
        })
        .subscribe(
            (resData) => {
            	this.data = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	fetchdepartament(){
  		this.sails
        .get('/departamento',{
        })
        .subscribe(
            (resData) => {
            	this.departamentoname = resData;
            },
            (error) => { console.log("Error occured") }
        )	
  	}
  	newbodega(){
  		this.sails
        .post('/bodega',this.formData)
        .subscribe(
            (resData) => {
            	resData.departamento = {
            		numero: this.departamentoSelected,
            		id: resData.departamento
            	}
            	let newadm = this.data.concat([resData]);
            	this.data = newadm;
            	this.clean();
            },
            (error) => { console.log("Error occured") }
        )
  	}
  	clean(){
  		this.formData = new Bodega;
  	}
  	destroy(item:any){
  		this.sails
        .delete('/bodega',{
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
  	departamento(item:any){
  		this.departamentoSelected = item.selectedOptions[0].innerHTML;
  	}
}
class Bodega{
	numero:number;
	departamento:number = -1;
	porcentajeDominio:number;
}