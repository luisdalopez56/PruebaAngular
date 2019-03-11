import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  @Input() clienteData: any = { cliente_nombre: '', cliente_apellido: '', cliente_edad: null };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCliente(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.clienteData = data;
    });
  }

  updateCliente() {
    this.rest.updateCliente(this.route.snapshot.params.id, this.clienteData).subscribe((result) => {
      this.router.navigate(['/cliente-details/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }


}
