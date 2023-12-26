import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-articles',
  templateUrl: './box-articles.component.html',
  styleUrls: ['./box-articles.component.scss']
})
export class BoxArticlesComponent {
  
@Input('item1') boxCol1 : Array<any>;
@Input('item2') boxCol2 : Array<any>; 
@Input('item3') boxCol3 : Array<any>; 

}
