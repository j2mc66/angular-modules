import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('active')
  active: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle(active){
    console.log(active);
    this.active = active;
  }

}
