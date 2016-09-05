import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComunaComponent } from './comuna.component';
import { UserService } from '../../services/users/user.service';
import { RouterModule } from '@angular/router';
import { DataTableDirectives,DataTable } from 'angular2-datatable/datatable';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [RouterModule,BrowserModule,FormsModule],
  declarations: [ComunaComponent],
  providers: [DataTableDirectives],
  exports: [ComunaComponent]

})


export class ComunaModule { 

	constructor(public USER: UserService) {}
}
