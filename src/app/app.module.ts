import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientModule} from './client/client.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, ClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
