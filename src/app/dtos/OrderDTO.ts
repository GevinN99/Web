export default class OrderDTO {
  // private _orderName: string;
  private _orderColour: string;
  private _orderSize: string;
  // private _orderPrice: number;
  // private _orderQuantity: number;
  // private _total: number;


  // constructor(orderName: string, orderColour: string, orderSize: string, orderPrice: number, orderQuantity: number, total: number) {
  constructor(orderColour: string, orderSize: string) {
    // this._orderName = orderName;
    this._orderColour = orderColour;
    this._orderSize = orderSize;
    // this._orderPrice = orderPrice;
    // this._orderQuantity = orderQuantity;
    // this._total = total;
  }


  // get orderName(): string {
  //   return this._orderName;
  // }
  //
  // set orderName(value: string) {
  //   this._orderName = value;
  // }

  get orderColour(): string {
    return this._orderColour;
  }

  set orderColour(value: string) {
    this._orderColour = value;
  }

  get orderSize(): string {
    return this._orderSize;
  }

  set orderSize(value: string) {
    this._orderSize = value;
  }

  // get orderPrice(): number {
  //   return this._orderPrice;
  // }
  //
  // set orderPrice(value: number) {
  //   this._orderPrice = value;
  // }
  //
  // get orderQuantity(): number {
  //   return this._orderQuantity;
  // }
  //
  // set orderQuantity(value: number) {
  //   this._orderQuantity = value;
  // }
  //
  // get total(): number {
  //   return this._total;
  // }
  //
  // set total(value: number) {
  //   this._total = value;
  // }
}
