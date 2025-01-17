import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  imports: [DatePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.css'
})
export class ApresentacaoComponent {
  dataAtual = new Date();
}
