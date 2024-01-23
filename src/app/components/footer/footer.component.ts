import { Component } from '@angular/core';
import { NavigationService } from 'src/app/classes/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public nav:NavigationService){
    
  }
}
