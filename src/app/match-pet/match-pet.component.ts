import { Component, OnInit } from '@angular/core';
import { PetpostserviceService } from '../postpet/petpostservice.service';
import { PetDetails } from '../pets-list/pet.details.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';
@Component({
  selector: 'app-match-pet',
  templateUrl: './match-pet.component.html',
  styleUrls: ['./match-pet.component.sass']
})
export class MatchPetComponent implements OnInit {
  petDetails: PetDetails[] = [];
  petData: PetDetails[] = [];
  showSpinner = true;
  petToBeMatched: PetDetails;
  parentPet: PetDetails;
  petsMatchedSuccessFully = false;
  constructor(private petpost: PetpostserviceService,
    private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit() {
    // this.parentPet = <PetDetails>JSON.parse(localStorage.getItem('parent'));
    
    this.dataService.getParentItem().subscribe((item: PetDetails) => {
      this.parentPet = item;
      this.parentPet.showMatchButton = false;
    })
    this.petDetails.push(this.parentPet);
    this.petpost.getpets(localStorage.getItem('userId')).subscribe((petdata: PetDetails[]) => {
      this.showSpinner = false;
      this.petData = petdata;
      this.petData.forEach(item => item.showRadioButton = true);

    });
  }
  selectedPet(event) {
    this.petToBeMatched = event;
  }
  matchPets() {
    this.httpClient.post(BASE_URL.BLUE_NOSE + '/matchPet', {
      "parentPetId": this.petToBeMatched.pet_id,
      "matchingPetId": this.parentPet.pet_id
    }).subscribe(data => {
      if (data) {
        this.petsMatchedSuccessFully = true;
        Swal.fire(
          'Your pet\'s partner is found !',
          ` Please use the following email address <strong>${this.parentPet.email}</strong> or
         phone number <strong>${this.parentPet.phoneno}</strong> for further communication`,
          'success'
        )
      }
    })

  }

}
