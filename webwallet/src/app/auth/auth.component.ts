import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeStateTrigger} from '../shared/animation/fade.animation';

@Component({
  selector: 'wma-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [fadeStateTrigger]
})

export class AuthComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['./login']);
  }
}
