import { KeyValue } from '@angular/common';

export function originalOrderKeyValues<T>(
  _a: KeyValue<keyof T, string | number | boolean | object>,
  _b: KeyValue<keyof T, string | number | boolean | object>
) {
  return 0;
}
