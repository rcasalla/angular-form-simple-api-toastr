import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryClientService implements InMemoryDbService {
  createDb() {
    let clientes = [
      {
        id: 1,
        name: "Husain Sommerfeld",
        address: "2 Darwin Way"
      },
      {
        id: 2,
        name: "Zia Sheahan",
        address: "6 Ramsey Parkway"
      },
      {
        id: 3,
        name: "Vanda Blackborow",
        address: "22346 Eagle Crest Junction"
      },
      {
        id: 4,
        name: "Bonnibelle Howells",
        address: "7 Atwood Way"
      }
    ];
    return { clientes };
  }
}
