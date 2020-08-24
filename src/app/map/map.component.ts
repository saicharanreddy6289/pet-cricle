import { Component, OnInit } from '@angular/core';
import { Pet } from './pet.model';
import { PetDetails } from '../pets-list/pet.details.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  lat: number = 44.651070;
  lng: number = -63.582687;
  petsArray: Pet[] = [
    {
      lat: 44.651070,
      long: -63.582687
    }
  ];
  zoomLevel = 10;
  locationText = "";
  sliderValue = 10;
  emptyLocation = false;
  results = []
  constructor() { }

  ngOnInit() {
  }
  searchNearBy() {
    if (this.locationText === "") {
      this.emptyLocation = true;
    }
  }
}
