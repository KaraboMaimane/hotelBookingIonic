import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayFivePage } from './display-five';

@NgModule({
  declarations: [
    DisplayFivePage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayFivePage),
  ],
})
export class DisplayFivePageModule {}
