import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.css'
})
export class ApresentacaoComponent {
  dataAtual = new Date();
}
