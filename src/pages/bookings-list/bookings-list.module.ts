import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingsListPage } from './bookings-list';

@NgModule({
  declarations: [
    BookingsListPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingsListPage),
  ],
})
export class BookingsListPageModule {}
