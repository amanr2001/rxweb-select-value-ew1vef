import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {RxSelectModule  } from "@rxweb/angular/select"

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RxSelectModule, ],
  declarations: [AppComponent],
  bootstrap:    [ AppComponent],
  providers:[]
})
export class AppModule { }
