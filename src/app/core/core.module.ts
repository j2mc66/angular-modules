import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FieldErrorDisplayComponent,
  ], 
  exports:[
    FieldErrorDisplayComponent,
  ]
})
export class CoreModule { }
