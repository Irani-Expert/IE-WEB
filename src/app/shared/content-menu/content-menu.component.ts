import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ScrollService } from './service/scroll.service';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss'],
})
export class ContentMenuComponent {
  menuOpen: boolean = false;
  iconActive: boolean = false;

  @Input('wid') wi: number;
  @ViewChild('listElem') listElem: ElementRef;
  @ViewChild('listElemHide') listElemHide: ElementRef;
  @Input('data') listElems: Array<any>;

  toggleMenu() {
    this.wi;
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
    this.iconActive = !this.iconActive;
    // this.listElemHide.nativeElement.classList.toggle('hide-menu');
  }

  // =======[اسکرول]======
  element :HTMLHeadingElement;
  constructor(private scrollService: ScrollService) {}

  hTagText : Array<any> | null = new Array<any>;

  scrollToId(id: string) {
    // const scrollElementH2 = document.getElementsByTagName('h2')
    // for (let index = 0; index < scrollElementH2.length; index++) {
    //   this.element = scrollElementH2[index];
    //   this.element.id = `h2-${index}`
    // }
    // this.scrollService.scrollToElement(this.element);
    
    this.scrollService.scrollToElementById(id);
  }
  ngOnInit(){
    setTimeout(() => {
      this.pushHTags();
    },2000)
  }

  pushHTags(){

   var h2 = document.querySelectorAll('h2');   
   h2.forEach((it,counter) =>{
    it.id = `h2-${counter}`
    this.hTagText?.push({
      id: it.id,
      text: it.textContent
    })
   });

   var h3 = document.querySelectorAll('h3');   
   h3.forEach((it,counter) =>{
    it.id = `h3-${counter}`
    this.hTagText?.push({
      id: it.id,
      text: it.textContent
    })
   });

   var h4 = document.querySelectorAll('h4');   
   h4.forEach((it,counter) =>{
    it.id = `h4-${counter}`
    this.hTagText?.push({
      id: it.id,
      text: it.textContent
    })
   });

   var h5 = document.querySelectorAll('h5');   
   h5.forEach((it,counter) =>{
    it.id = `h5-${counter}`
    this.hTagText?.push({
      id: it.id,
      text: it.textContent
    })
   });

   var h6 = document.querySelectorAll('h6');   
   h6.forEach((it,counter) =>{
    it.id = `h6-${counter}`
    this.hTagText?.push({
      id: it.id,
      text: it.textContent
    })
   });

        
  }
  @Output('scroll') isEmited = new EventEmitter<boolean>();

  scrollToView() {
    this.isEmited.emit(true);
  }
  // ======[رسپانسیو]====

  NavbarsStatus(type: number) {
    this.openNav = type;
  }
  openNav: number = 0;
}
