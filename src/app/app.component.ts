import { Component } from '@angular/core';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './types';

@Component({
  selector: 'app-root',
  imports: [ApresentacaoComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  saldo = 3000;

  processarTransacao(transacao: Transacao) {
    if (transacao.tipo === "deposito") {
      this.saldo += transacao.valor;
    } else if (transacao.tipo === "saque") {
      if (this.saldo >= transacao.valor) {
        this.saldo -= transacao.valor;
      } else {
        alert('Saldo insuficiente!');
      }
    }
  }
}
