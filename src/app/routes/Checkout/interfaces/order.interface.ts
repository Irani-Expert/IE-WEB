import { AuthService } from 'src/app/shared/auth/auth.service';

export class Order {
  orderItems: OrderItems[] = new Array<OrderItems>();
  acceptRules = false;
  accountNumber = '';
  startDate = `${new Date().getFullYear}/${new Date().getMonth}/${
    new Date().getDate
  }`;
  token = '';
  totalPrice = 0;
  transactionCode = '';
  constructor(authService?: AuthService) {
    // authService._user.id !== 0 ? this.token = authService._user.token :console.warn('Unlogged');
  }
}
interface OrderItems {
  tableType: number;
  rowID: number;
  count: number;
  price: number;
}
