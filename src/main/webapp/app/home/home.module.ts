import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StimatorSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [StimatorSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class StimatorHomeModule {}
