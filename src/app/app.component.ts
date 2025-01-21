import { Component } from '@angular/core';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";

@Component({
  selector: 'app-root',
  imports: [ApresentacaoComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  saldo = 3000;
}
