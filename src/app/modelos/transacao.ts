export class Transacao {
  constructor(
    public tipo: TipoTransacao,
    public valor: number
  ) { }
}

export enum TipoTransacao {
  DEPOSITO = 'deposito',
  SAQUE = 'saque'
}
