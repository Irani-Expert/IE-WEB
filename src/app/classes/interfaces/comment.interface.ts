export interface Comment {
  id: number;
  updateDate?: string;
  createDate?: string;
  createBy?: number;
  updateBy?: number;
  title?: string;
  description?: string;
  orderID?: number;
  isActive?: boolean;
  userID: number;
  parentID?: number;
  commentParent?: string[];
  tableType: number;
  tableTypeTitle?: string;
  rowID: number;
  name: string;
  email: string;
  rate: number;
  text: string;
  isAccepted: boolean;
}
