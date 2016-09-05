
import { SailsService } from 'angular2-sails';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
@Injectable()
export class UserService {
	auth_obj: any;
	constructor() { 
		this.auth_obj = null;
	}
	public regAuth(user: any){
		this.auth_obj = user;
	}
	public removeAuth(){
		this.auth_obj = null;
		return true;
	}
	public isAuth(){
		if(this.auth_obj != null){
			return true;
		}
		else{
			return false;
		}
	}
}

export class User{
	mail: String;
	name: String;
}