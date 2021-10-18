import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/conta';
import { ContaService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent implements OnInit {

  contas: IConta[] = [];
  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas() {
    this.contaService.listarTodasContas().subscribe((result: IConta[]) => {
      this.contas = result;
    }, error => {
      console.error(error);
    });
  }
}
