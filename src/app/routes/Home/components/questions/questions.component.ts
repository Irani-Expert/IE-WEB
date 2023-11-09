import { Component } from '@angular/core';
import { config , Menu } from 'src/app/shared/acordian/types';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  options: config = { multi: false };
  
  menus: Menu[] = [
    { 
      name: 'lorem',
      iconClass: 'fa fa-code',
      active: false,
      submenu: [
        { name: 'loremmmmmmmmmmmmm isssssssssssssss ipsummmmmmmmmmmmm', url: '#' },
      ]
    },
    { 
      name: 'lorem',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis a eius iste! At voluptatem deserunt repellendus repudiandae nobis ad quasi, reprehenderit excepturi. Voluptatem, accusamus. Facere dicta vitae ipsam incidunt!'
        , url: '#' },
      ]
    },
    { 
      name: 'lorem',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'loremmmmmmmmmm', url: '#' },
      ]
    }
  ];
}
