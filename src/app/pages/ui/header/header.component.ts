import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output('active') active = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle(active){
    this.active.emit(active);
  }

}
