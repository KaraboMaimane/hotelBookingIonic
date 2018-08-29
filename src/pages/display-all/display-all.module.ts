import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayAllPage } from './display-all';

@NgModule({
  declarations: [
    DisplayAllPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayAllPage),
  ],
})
export class DisplayAllPageModule {}
