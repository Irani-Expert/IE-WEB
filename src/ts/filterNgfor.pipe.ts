import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    if (searchText.includes(',')) {
      // return items.filter((item) => {
      //   return item.title.toLowerCase().includes(searchText);
      // });
      var searchedItems = searchText.split(',');
      // return items.filter((item) => {
      //   if (searchedItems.find((x) => x == item.title) != undefined) {
      //     return item.title.toLowerCase();
      //   }
      // })

      searchText = searchedItems[searchedItems.length - 1];
    }

    return items.filter((item) => {
      return item.title.toLowerCase().includes(searchText);
    });
  }
}
