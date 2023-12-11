export interface Blog {
  id: number;
  title: string;
  updateDate: string;
  updatedByFirstName: string;
  updatedByLastName: string;
  viewsCount: number;
  cardImagePath: string;
}
export interface SingleBlog {
  id: number;
  title: string;
}
