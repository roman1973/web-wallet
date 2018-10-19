import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SideBarToggleService} from '../../service/side-bar-toggle.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wma-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatSidenav;
  private toggleSibscrible: Subscription;
  constructor(private sideBarToggleService: SideBarToggleService) { }
  ngOnInit() {
    this.toggleSibscrible = this.sideBarToggleService.toggle$.subscribe(this.toggleFunc.bind(this));
   }

  toggleFunc() {
    this.drawer.toggle();
 }

  ngOnDestroy() {
    if (this.toggleSibscrible) {
      this.toggleSibscrible.unsubscribe();
    }
  }
}
