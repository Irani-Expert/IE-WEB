export interface Favorite {
  rowID: number;
  tableType: number;
  readonly id: number;
  readonly userId: number;
  claimType: number;
  claimValue?: string;
  createDate: string | null;
}
