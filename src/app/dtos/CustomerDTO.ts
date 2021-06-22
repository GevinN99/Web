export default class CustomerDto {
  private _customerName: string;
  private _customerEmail: string;
  private _customerMobileNumber: number;
  private _customerAddress: string;
  private _customerPassword: string;


  constructor(customerName: string, customerEmail: string, customerMobileNumber: number, customerAddress: string, customerPassword: string) {
    this._customerName = customerName;
    this._customerEmail = customerEmail;
    this._customerMobileNumber = customerMobileNumber;
    this._customerAddress = customerAddress;
    this._customerPassword = customerPassword;
  }


  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get customerEmail(): string {
    return this._customerEmail;
  }

  set customerEmail(value: string) {
    this._customerEmail = value;
  }

  get customerMobileNumber(): number {
    return this._customerMobileNumber;
  }

  set customerMobileNumber(value: number) {
    this._customerMobileNumber = value;
  }

  get customerAddress(): string {
    return this._customerAddress;
  }

  set customerAddress(value: string) {
    this._customerAddress = value;
  }

  get customerPassword(): string {
    return this._customerPassword;
  }

  set customerPassword(value: string) {
    this._customerPassword = value;
  }
}
