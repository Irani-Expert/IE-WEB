export interface Rule {
  id: number;

  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  tableType: number;
  tableTypeTitle: string;
  rowID: number;
}
