import { Component, OnInit } from '@angular/core';
import { PetpostserviceService } from '../postpet/petpostservice.service';
@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.sass']
})
export class PetDetailsComponent implements OnInit {
  pet_name: string = "";
  pet_age: string = "";
  pet_gender: string = "";
  pet_color: string = "";
  pet_breed: string = "";
  imageUrl: string = "";
  pet_description: string = "";
  petData: any = [];
  showSpinner = true;

  constructor(private petpost: PetpostserviceService) { }

  ngOnInit() {
    let selectedPetId = localStorage.getItem('selectedPetId')
    this.petpost.getpets(localStorage.getItem('userId')).subscribe((petdata: any[]) => {
      this.showSpinner = false;
      petdata.forEach(item => {
        if (item.pet_id === +selectedPetId) {
          this.petData.push(item);
        }
      }
      );

    });
  }

}
