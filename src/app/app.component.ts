import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      if (transacaoAtual.tipo === TipoTransacao.DEPOSITO) {
        return acc + transacaoAtual.valor;
      } else if (transacaoAtual.tipo === TipoTransacao.SAQUE) {
        return acc - transacaoAtual.valor;
      }

      throw new Error('Tipo de transação não identificado.');
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente!')
    }

    this.transacoes.update((listaAtual) => [...listaAtual, transacao]);
  }
}
