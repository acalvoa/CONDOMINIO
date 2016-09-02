import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService{
	constructor(private http: Http) { 
	}
	auth_token: any;
	public getItem(type:string){
		return this.auth_token;
	}
	public setItem(type:string, value: any){
		this.auth_token = value;
	}
	public removeItem(type:string){
		this.auth_token = null;
	}
}