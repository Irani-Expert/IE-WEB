export class Result<T> {
    success	= false;
  message	= '';
  data: T | undefined;
  errors: [] = [];
  }