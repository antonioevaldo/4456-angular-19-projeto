export class Transacao {
  private static contador = 0;

  readonly id = Transacao.contador++;
  readonly data = new Date();

  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) { }
}

export enum TipoTransacao {
  DEPOSITO = 'deposito',
  SAQUE = 'saque'
}
