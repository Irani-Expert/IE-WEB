export interface Blog {
  id: number;
  title: string;
  updateDate: string;
  updatedByFirstName: string;
  updatedByLastName: string;
  cardImagePath: string;
  viewsCount: number;
  authorIconPath : string;
  studyTime : string;
  publishDate : string;
}
export interface SingleBlog {
  id: number;
  title: string;
}
