import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {HttpClientModule} from '@angular/common/http';
import { Practice1Component } from './practice1/practice1.component';
import { SaveComponent } from './save/save.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Practice1Component,
    SaveComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  
  ],
  providers: [],
  bootstrap: [SaveComponent]
})
export class AppModule { }
