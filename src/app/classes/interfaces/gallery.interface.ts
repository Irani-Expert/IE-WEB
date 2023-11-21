export interface Gallery {
  id: number;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  rowID: number;
  tableType: number;
  tableTypeTitle: string;
  filePath: string;
  fileExists: boolean;
  stationID: number;
}
