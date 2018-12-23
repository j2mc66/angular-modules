import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private fixed = new BehaviorSubject<boolean>(false);
  fixed$ = this.fixed.asObservable();

  constructor(){}

  setIsFixed(value: boolean) {
    this.fixed.next(value);
  }

  get isFixed():boolean {
    return this.fixed.getValue()
  }

}
