import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TreeviewModule } from 'ngx-treeview';



@NgModule(
{
  	declarations:
	[
    	AppComponent
  	],
  	imports:
	[
		BrowserModule,
		AppRoutingModule,
		TreeviewModule.forRoot()
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})



export class AppModule { }