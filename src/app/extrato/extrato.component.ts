import { Component, computed, input } from '@angular/core';
import { Transacao } from '../modelos/transacao';
import { MesExtratoComponent } from "./mes-extrato/mes-extrato.component";

@Component({
  selector: 'app-extrato',
  imports: [MesExtratoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>();

  transacoesPorPeriodo = computed(() => {
    return this.transacoes().reduce((mapa, transacao) => {
      const periodo = this.obtemPeriodo(transacao);
      const transacoesDessePeriodo = mapa.get(periodo) ?? [];

      mapa.set(periodo, [...transacoesDessePeriodo, transacao]);

      return mapa;
    }, new Map<string, Transacao[]>());
  });

  private obtemPeriodo(transacao: Transacao) {
    const mes = transacao.data.toLocaleString('pt-BR', { month: 'long' })
    const ano = transacao.data.getFullYear();

    return `${mes}/${ano}`;
  }
}
