import { Component } from '@angular/core';

interface Isymbol {
  name: string;
  icon: string;
  isActive: boolean;
}

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.scss'],
})
export class SymbolsComponent {
  items: Isymbol[] = [
    { name: 'EUR', icon: 'fi-eu', isActive: false },
    { name: 'USD', icon: 'fi-us', isActive: false },
    { name: 'GBP', icon: 'fi-gb', isActive: false },
    { name: 'CHF', icon: 'fi-ch', isActive: false },
    { name: 'SEK', icon: 'fi-se', isActive: false },
    { name: 'ZAR', icon: 'fi-za', isActive: false },
    { name: 'SGD', icon: 'fi-sg', isActive: false },
    { name: 'NOK', icon: 'fi-no', isActive: false },
    { name: 'NZD', icon: 'fi-nz', isActive: false },
    { name: 'MXN', icon: 'fi-mx', isActive: false },
    { name: 'KRW', icon: 'fi-kr', isActive: false },
    { name: 'JPY', icon: 'fi-jp', isActive: false },
    { name: 'INR', icon: 'fi-in', isActive: false },
    { name: 'HKD', icon: 'fi-hk', isActive: false },
    { name: 'CNY', icon: 'fi-cn', isActive: false },
    { name: 'CAD', icon: 'fi-ca', isActive: false },
    { name: 'BRL', icon: 'fi-br', isActive: false },
    { name: 'AUD', icon: 'fi-au', isActive: false },
    { name: 'WW', icon: 'fi-un', isActive: false },
  ];
  activate(name: string) {
    let index = this.items.findIndex((x) => x.name == name);
    this.items[index].isActive = !this.items[index].isActive;
  }
}
