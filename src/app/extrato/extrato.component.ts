import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [CurrencyPipe],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>();
}
