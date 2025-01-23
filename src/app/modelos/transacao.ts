export class Transacao {
  private static contador = 0;

  id = Transacao.contador++;

  constructor(
    public tipo: TipoTransacao,
    public valor: number
  ) { }
}

export enum TipoTransacao {
  DEPOSITO = 'deposito',
  SAQUE = 'saque'
}
