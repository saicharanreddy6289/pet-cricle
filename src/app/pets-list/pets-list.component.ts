/**
 Created by
 Aravind Sundarrajan (B00824107)
*/
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PetDetails } from './pet.details.model';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {
  @Input() petDetails: PetDetails[] = [];
  @Output() selectedPet: EventEmitter<PetDetails> = new EventEmitter<PetDetails>();
  constructor() { }

  ngOnInit() {
  }
  selectPet(item) {
    this.selectedPet.emit(item);
  }
}
