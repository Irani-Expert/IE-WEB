export interface Favorite {
  rowID: number;
  tableType: number;
  id: number;
  readonly userId: number;
  claimType: number;
  claimValue?: string;
  createDate: string | null;
}
