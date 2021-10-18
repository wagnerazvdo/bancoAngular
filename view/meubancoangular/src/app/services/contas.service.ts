import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { IExtrato } from '../interfaces/extrato';
import { ISaqueDeposito } from '../interfaces/saqueDeposito';
import { ITransferencia } from '../interfaces/transferencia';


@Injectable({
  providedIn: 'root'
})
export class ContaService {

  //////// ENDPOINT /////////
  endpoint = 'contas';
  api = environment.api;
  //////////////////////////

  constructor(private http: HttpClient) { }

  listarTodasContas(): Observable<IConta[]> {
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}/`);
  }
  cadastrarConta(conta: IConta) {
    return this.http.post<IConta>(`${this.api}/${this.endpoint}`, conta);
  }
  sacar(saqueDeposito: ISaqueDeposito) {
    return this.http.post<ISaqueDeposito>(`${this.api}/${this.endpoint}/sacar`, saqueDeposito);
  }
  deposito(deposito: ISaqueDeposito) {
    return this.http.post<ISaqueDeposito>(`${this.api}${this.endpoint}/deposito`, deposito)
  }
  transferencia(transferencia: ITransferencia) {
    return this.http.post<ITransferencia>(`${this.api}${this.endpoint}/transferencia`, transferencia)
  }
  Extrato(agencia: string, conta: string): Observable<IExtrato[]> {
    return this.http.get<IExtrato[]>(`${this.api}operacoes/buscarExtratoPorConta/${agencia}/${conta}`)
  }

}
