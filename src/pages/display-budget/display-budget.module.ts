import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayBudgetPage } from './display-budget';

@NgModule({
  declarations: [
    DisplayBudgetPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayBudgetPage),
  ],
})
export class DisplayBudgetPageModule {}
