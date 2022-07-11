import { NgModule } from '@angular/core';
import { NgxEverythingUppercaseComponent } from './ngx-everything-uppercase.component';
import { MakeTextDirective } from './ngx-everything-uppercase.directive';

@NgModule({
  declarations: [
    NgxEverythingUppercaseComponent,
    MakeTextDirective
  ],
  imports: [
  ],
  exports: [
    NgxEverythingUppercaseComponent,
    MakeTextDirective
  ]
})
export class NgxEverythingUppercaseModule { }
