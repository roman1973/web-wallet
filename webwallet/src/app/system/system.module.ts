import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { SystemComponent } from './system.component';
import {SystemRoutingModule} from './system.routing.module';
import {ExchangeRateComponent} from './exchange-rate/exchange-rate.component';
import {SidebarComponent} from './shared/component/sidebar/sidebar.component';
import {HeaderComponent} from './shared/component/header/header.component';
import {ValuteRateService} from './shared/service/valute-rate.service';
import {SideBarToggleService} from './shared/service/side-bar-toggle.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    ExchangeRateComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [ValuteRateService, SideBarToggleService]
})
export class SystemModule {}
