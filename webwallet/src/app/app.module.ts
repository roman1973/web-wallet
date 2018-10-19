import '../polyfills.ts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app.routing.module';
import {UserService} from './shared/service/user.service';
import {AuthService} from './shared/service/auth.service';
import {SharedModule} from './shared/shared.module';
import {SystemModule} from './system/system.module';
import { MessageComponent } from './shared/component/message/message.component';
import {MessageService} from './shared/service/message.service';
import {Authguard} from './shared/service/authguard';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
          ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    SystemModule
    ],
  providers: [UserService, AuthService, MessageService, Authguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
