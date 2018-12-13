import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiModule } from './ui/ui.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

@NgModule({
    imports: [
      CommonModule,
      PagesRoutingModule,
      UiModule
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