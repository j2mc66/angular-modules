import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isFixed: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.subscription = this.uiService.fixed$
      .subscribe(fixed => this.isFixed = fixed)
  }

}
