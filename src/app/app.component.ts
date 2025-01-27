import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from "./extrato/extrato.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([
    {
      id: '7',
      tipo: TipoTransacao.DEPOSITO,
      valor: 10,
      data: new Date('2025-01-10T00:00')
    },
    {
      id: '6',
      tipo: TipoTransacao.SAQUE,
      valor: 20,
      data: new Date('2024-12-31T00:00')
    },
    {
      id: '2',
      tipo: TipoTransacao.SAQUE,
      valor: 10,
      data: new Date('2024-01-20T00:00')
    },
    {
      id: '1',
      tipo: TipoTransacao.DEPOSITO,
      valor: 30,
      data: new Date('2024-01-20T00:00')
    },
    {
      id: '0',
      tipo: TipoTransacao.DEPOSITO,
      valor: 50,
      data: new Date('2024-01-20T00:00')
    },
  ]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;

        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;

        default:
          throw new Error('Tipo de transação não identificado.');
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente!')
    }

    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
