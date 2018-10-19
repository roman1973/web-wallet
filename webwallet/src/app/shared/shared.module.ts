import {NgModule} from '@angular/core';
import {DemoMaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule
    ],
  exports: [
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
 })
export class SharedModule {}
