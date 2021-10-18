import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from './pages/caixa-eletronico/deposito/deposito.component';
import { ExtratoComponent } from './pages/caixa-eletronico/extrato/extrato.component';
import { SaqueComponent } from './pages/caixa-eletronico/saque/saque.component';
import { TransferenciaComponent } from './pages/caixa-eletronico/transferencia/transferencia.component';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { CadastroEdicaoContasComponent } from './pages/contas/cadastro-edicao-contas/cadastro-edicao-contas.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/index', pathMatch: 'full'
  },
  {
    path: 'clientes', component: ListagemClientesComponent,
  },
  {
    path: 'clientes/cadastrar', component: CadastroEdicaoClientesComponent,
  },
  {
    path: 'clientes/editar/:id', component: CadastroEdicaoClientesComponent,
  },
  {
    path: 'contas', component: ListagemContasComponent,
  },
  {
    path: 'contas/cadastrar', component: CadastroEdicaoContasComponent,
  },
  {
    path: 'caixa-eletronico/saque', component: SaqueComponent,
  },
  {
    path: 'caixa-eletronico/deposito', component: DepositoComponent,
  },
  {
    path: 'caixa-eletronico/transferencia', component: TransferenciaComponent,
  },
  {
    path: 'caixa-eletronico/extrato', component: ExtratoComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
