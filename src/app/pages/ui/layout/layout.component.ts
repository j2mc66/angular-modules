import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isFixed: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.subscription = this.uiService.fixed$
      .subscribe(fixed => this.isFixed = fixed)
  }
  
}
