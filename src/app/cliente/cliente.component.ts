import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clientes = [];
    this.rest.getClientes().subscribe((data: {}) => {
      console.log(data);
      this.clientes = data;
    });
  }

  addCliente() {
    this.router.navigate(['/cliente-add']);
  }

  deleteCliente(id: any) {
    this.rest.deleteCliente(id)
      .subscribe(res => {
          this.getClientes();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
