import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";

@Component({
  selector: 'app-banner',
  imports: [CurrencyPipe, BoasVindasComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  saldo = input.required<number>();
}
