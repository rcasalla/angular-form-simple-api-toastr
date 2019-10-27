import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Client } from "./client";

@Injectable({ providedIn: "root" })
export class ClientService {
  private clientesUrl = "api/clientes"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  /** GET clientes from the server */
  getClientes(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientesUrl);
  }

  /** GET client by id. Will 404 if id not found */
  getClient(id: number): Observable<Client> {
    const url = `${this.clientesUrl}/${id}`;
    return this.http.get<Client>(url);
  }
  /** POST: add a new client to the server */
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientesUrl, client, this.httpOptions);
  }

  /** DELETE: delete the client from the server */
  deleteClient(client: Client | number): Observable<Client> {
    const id = typeof client === "number" ? client : client.id;
    const url = `${this.clientesUrl}/${id}`;

    return this.http.delete<Client>(url, this.httpOptions);
  }

  /** PUT: update the client on the server */
  updateClient(client: Client): Observable<any> {
    return this.http.put(this.clientesUrl, client, this.httpOptions);
  }
}
