import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SailsService } from 'angular2-sails';

@Injectable()
export class SailService {
	constructor(public Sails: SailsService){
		console.log("Cargando Sails...");
		this.Sails.connect("http://localhost:1337");
	}
}