import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PetDetails } from './pets-list/pet.details.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('not loggedin');
  private parentItem = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();
  
  constructor() {
  }
  changeMessage(message: string) {
    this.messageSource.next(message)

  }
  setParentItem(item) {
    this.parentItem.next(item)
  }
  getParentItem(){
    return this.parentItem.asObservable();
  }
}
