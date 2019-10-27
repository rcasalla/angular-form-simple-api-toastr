import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { CommonModule } from '@angular/common';


import { ToastrModule } from 'ngx-toastr';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

import { ClientModule } from "./client/client.module";
import { AppComponent } from "./app.component";
import { InMemoryClientService } from './in-memory-client.service';

@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryClientService, {delay : 100}),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [InMemoryClientService]
})
export class AppModule {}



