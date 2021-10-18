import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saqueDeposito';
import { ContaService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  formValue: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });
  constructor(
    private contaService: ContaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.deposito();
  }

  deposito() {
    const deposito: ISaqueDeposito = this.formValue.value;
    this.contaService.deposito(deposito).subscribe((result => {
      Swal.fire('Sucesso!', 'Depósito concluído!', 'success')
      this.router.navigate(['/contas']);
    }), error => {
      console.error(error);
    });
  }

}
