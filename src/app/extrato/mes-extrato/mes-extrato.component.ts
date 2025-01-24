import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TransacaoComponent } from './transacao/transacao.component';
import { Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-mes-extrato',
  imports: [TransacaoComponent, DatePipe, TitleCasePipe],
  templateUrl: './mes-extrato.component.html',
  styleUrl: './mes-extrato.component.css'
})
export class MesExtratoComponent {
  transacoes = input.required<Transacao[]>();
}
