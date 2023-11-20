export interface BannerInterface {
  id: number;
  updateDate: string;
  createDate: string;
  createBy: number;
  updateBy: number;
  title: string;
  description: string;
  orderID: number;
  isActive: boolean;
  key: string;
  type: number;
  typeTitle: string;
  linkType: number;
  linkTypeTitle: string;
  filePath: string;
  fileType: number;
  fileTypeTitle: string;
  fileInfo: string;
  url: string;
  fileExists: boolean;
}
