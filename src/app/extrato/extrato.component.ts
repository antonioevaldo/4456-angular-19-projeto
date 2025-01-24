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

  periodosTransacoes = computed(() => {
    const mapa = new Map<string, Transacao[]>();

    this.transacoes().forEach((transacao) => {
      const mesIndice = transacao.data.getMonth();
      const ano = transacao.data.getFullYear();
      const chaveDoMapa = `${mesIndice}/${ano}`;

      const transacoesDessePeriodo = mapa.get(chaveDoMapa) ?? [];

      mapa.set(chaveDoMapa, [...transacoesDessePeriodo, transacao]);
    });

    return mapa;
  });
}
