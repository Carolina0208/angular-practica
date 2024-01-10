import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TablaPokemonesComponent } from './tabla-pokemones/tabla-pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,        
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,   
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
