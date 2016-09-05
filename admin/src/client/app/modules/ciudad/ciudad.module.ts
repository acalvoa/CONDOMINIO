import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CiudadComponent } from './ciudad.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DataTableDirectives,DataTable } from 'angular2-datatable/datatable';

@NgModule({
  imports: [RouterModule,BrowserModule,FormsModule],
  declarations: [CiudadComponent],
  providers: [DataTableDirectives],
  exports: [CiudadComponent]

})

export class CiudadModule { 
	constructor(public USER: UserService) {}
}
