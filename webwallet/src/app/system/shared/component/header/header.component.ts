import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {SideBarToggleService} from '../../service/side-bar-toggle.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../../../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'wma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private date: Date;
  private sesiontime: Date = new Date();
  private dateSubscription: Subscription;
  private sesiontimeSubscription: Subscription;

  constructor(
    private sideBarToggleService: SideBarToggleService,
    private authService: AuthService,
    private router: Router
    ) { }
   ngOnInit() {
     this.dateSubscription = Observable.timer(0, 1000).subscribe((x) => this.date = new Date());
      this.sesiontimeSubscription = Observable.timer(0, 1000).subscribe((x) => this.sesiontime = new Date(x * 1000));

   }
  fingerClick() {
    this.sideBarToggleService.toggle$.next();
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/login'], {
      queryParams: {
        accessDenied: true
      }
    });

  }
  ngOnDestroy() {
     if (this.dateSubscription) {
       this.dateSubscription.unsubscribe();
     }
    if (this.sesiontimeSubscription) {
      this.sesiontimeSubscription.unsubscribe();
    }
  }
}
