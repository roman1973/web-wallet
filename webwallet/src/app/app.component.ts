import {Component} from '@angular/core';
import {fadeStateTrigger} from './shared/animation/fade.animation';


@Component({
  selector: 'wma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeStateTrigger]
})
export class AppComponent  {}
