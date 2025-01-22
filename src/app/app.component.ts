import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './modelos/transacao';

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
      return acc + transacaoAtual.valor;
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => [...listaAtual, transacao]);
  }
}
