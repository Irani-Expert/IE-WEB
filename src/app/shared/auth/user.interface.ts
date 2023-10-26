export class User {
  id = 0;
  username = '';
  firstName = '';
  lastName = '';
  token = '';
  favourites?: Favourite[];
}
interface Favourite {
  rowID: number;
  tableType: number;
  id: number;
}
export interface ILogin {
  username: string;
  password: string;
}
export interface ISignUp {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  accountNumber: string;
  parentReferralCode?: string;
}
