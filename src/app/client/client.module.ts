import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientService } from './client.service';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ClientCreateComponent],
  exports:[ClientCreateComponent],
  providers: [ClientService]
})
export class ClientModule { }
