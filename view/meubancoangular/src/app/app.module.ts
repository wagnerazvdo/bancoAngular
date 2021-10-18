import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ClienteService } from './services/cliente.service';
import { ContaService } from './services/contas.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PagesModule

  ],
  exports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [ClienteService,
    ContaService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
