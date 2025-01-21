import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transacao } from '../types';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<Transacao>();

  aoSubmeter() {
    const transacao: Transacao = {
      tipo: this.tipoTransacao as Transacao["tipo"],
      valor: Number(this.valorTransacao)
    };

    this.transacaoCriada.emit(transacao);
  }
}
