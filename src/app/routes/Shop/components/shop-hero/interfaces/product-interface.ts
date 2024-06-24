// export interface planInterface {
//     id : number;
//     productID : number;
//     title : string;
//     isActive : boolean;
//     price : number;
//     offPrice?: number;
//     description: string;
// }
// ===========[وب سرویس خودم]===============
export interface planInterface {
  id: number;
  title: string;
  active: boolean;
  offPrice: number;
  price: number;
  description: string;
  discountPrice: number;
  toPayPrice: number;
}
