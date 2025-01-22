import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [DatePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  dataAtual = new Date();
  saldo = input.required<number>();
}
