export class Order {
  orderItems: OrderItems[] = new Array<OrderItems>();
  acceptRules = false;
  accountNumber = '';
  startDate = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
  token = '';
  totalPrice = 0;
  transactionCode = '';
  constructor() {}
}
interface OrderItems {
  tableType: number;
  rowID: number;
  count: number;
  price: number;
}
