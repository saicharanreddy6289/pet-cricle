import { Component, OnInit } from '@angular/core';
import { PetDetails } from '../pets-list/pet.details.model';

@Component({
  selector: 'app-your-pets',
  templateUrl: './your-pets.component.html',
  styleUrls: ['./your-pets.component.sass']
})
export class YourPetsComponent implements OnInit {
  petDetails: PetDetails[] = [];
  constructor() { }

  ngOnInit() {
  }

}
