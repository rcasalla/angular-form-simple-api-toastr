import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";





import { ToastrModule } from 'ngx-toastr';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

import { ClientModule } from "./client/client.module";
import { AppComponent } from "./app.component";


@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}



