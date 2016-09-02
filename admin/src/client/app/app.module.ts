import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { routes } from './app.routes';

// import { AboutModule } from './about/about.module';
// import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ModModule } from './modules/mod.module';
import { ServicesModule } from './services/services.module';
import { SailService } from './services/sails/ssails.service';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), ModModule, ServicesModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, SailService],
  bootstrap: [AppComponent]

})

export class AppModule { }
