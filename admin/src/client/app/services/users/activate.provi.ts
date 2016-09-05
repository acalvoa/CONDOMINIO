import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class ActivateProv implements CanActivate {
  	constructor(private router: Router,private permissions: UserService) {}
  	canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  	): Observable<boolean>|Promise<boolean>|boolean {
  		if(!this.permissions.isAuth()){
  			this.router.navigate(['login']);
  			return false;
  		}
  		else{
  			return true;
  		}
  		
  	}
}