export class Result<T> {
  success = false;
  message = '';
  data: T | undefined;
  results: T;
  errors: [] = [];
}
