class Player {
  id: number;
  symbolId: string;

  constructor(id: number, symbol: string) {
    this.id = id;
    this.symbolId = symbol;
  }

  getSymbolId(): string {
    return this.symbolId
  }
}
