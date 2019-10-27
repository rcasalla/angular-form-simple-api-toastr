import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";

import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: "app-client-create",
  templateUrl: "./client-create.component.html",
  styleUrls: ["./client-create.component.css"]
})
export class ClientCreateComponent implements OnInit {
  clientForm: FormGroup;

  clientes: Client[];

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.clientForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      address: ["", Validators.required]
    });
  }

  createClient(newClient: Client) {
    // Process checkout data here
    console.warn("el cliente fue creado", newClient);

    this.clientService.createClient(newClient).subscribe(client => {
      this.clientes.push(client);
       this.showSuccess();
    });
    this.clientForm.reset();
  }

  showSuccess() {
    this.toastr.success("Cliente", "Creado exitosamente!");
  }
  ngOnInit() {
    this.clientService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }
}
