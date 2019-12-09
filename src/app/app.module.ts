import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routeComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceService} from './service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './service/authguard';


@NgModule({
  declarations: [
    AppComponent,
    routeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
