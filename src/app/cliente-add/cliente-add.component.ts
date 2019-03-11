import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  @Input() clienteData = { cliente_nombre: '', cliente_apellido: '', cliente_edad: null, id: null };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addCliente() {
    this.rest.addCliente(this.clienteData).subscribe((result) => {
      this.router.navigate(['/cliente-details/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
