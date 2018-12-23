import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { NotFoundComponent } from '@/not-found/not-found.component';

@NgModule({
    imports: [
      CommonModule,
      UiModule,
      PagesRoutingModule,
    ],
    declarations: [
      PagesComponent,
      DashboardComponent,
      NotFoundComponent,
      UpdateUserComponent               
    ],
  })
  export class PagesModule {
  }