import { Component, input } from '@angular/core';
import { TransacaoComponent } from './transacao/transacao.component';
import { Transacao } from '../../modelos/transacao';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-mes-extrato',
  imports: [TransacaoComponent, TitleCasePipe],
  templateUrl: './mes-extrato.component.html',
  styleUrl: './mes-extrato.component.css'
})
export class MesExtratoComponent {
  periodoComTransacoes = input.required<[string, Transacao[]]>();
}
