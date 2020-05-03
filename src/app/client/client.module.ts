import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientCreateComponent } from './client-create/client-create.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ClientCreateComponent],
  exports:[ClientCreateComponent]
})
export class ClientModule { }
