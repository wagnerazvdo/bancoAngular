import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { ContaService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  formValue: FormGroup = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  });

  constructor(
    private contaService: ContaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.transferencia();
  }
  transferencia() {
    const transferencia: ITransferencia = this.formValue.value;
    this.contaService.transferencia(transferencia).subscribe((result: ITransferencia) => {
      Swal.fire('Sucesso!', 'Transferência concluída!', 'success')
      this.router.navigate(['/contas']);
    }, error => {
      console.error(error);
    });
  }
}
