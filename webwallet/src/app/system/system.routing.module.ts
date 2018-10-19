import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {ExchangeRateComponent} from './exchange-rate/exchange-rate.component';
import {Authguard} from '../shared/service/authguard';

const routes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [Authguard], children: [
      {path: 'valrate', component: ExchangeRateComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
