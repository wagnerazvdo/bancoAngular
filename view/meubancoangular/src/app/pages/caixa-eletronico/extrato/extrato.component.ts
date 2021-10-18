import { Component, OnInit } from '@angular/core';
import { IExtrato } from 'src/app/interfaces/extrato';
import { ContaService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  agencia: string = "";
  conta: string = "";
  extrato: IExtrato[] = [];

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.buscarExtrato();
  }

  buscarExtrato() {
    this.contaService.Extrato(this.agencia, this.conta).subscribe((result: IExtrato[]) => {
      this.extrato = result;
    });

  }

}
