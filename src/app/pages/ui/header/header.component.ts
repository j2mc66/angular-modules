import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  isFixed: boolean;
  subscription: Subscription;
  
  constructor(private uiService: UiService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.subscription = this.uiService.fixed$
      .subscribe(fixed => this.isFixed = fixed)
  }

  toggle(isFixed){
    this.isFixed = isFixed;
    this.uiService.setIsFixed(isFixed);
  }

  logout(){
    this.authService.logout();
  }

}
