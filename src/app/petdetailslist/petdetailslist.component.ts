import { Component, OnInit } from '@angular/core';
import { PetpostserviceService } from '../postpet/petpostservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petdetailslist',
  templateUrl: './petdetailslist.component.html',
  styleUrls: ['./petdetailslist.component.sass']
})
export class PetdetailslistComponent implements OnInit {
  petData: any = [];
  showSpinner = true;
  constructor(private petpost: PetpostserviceService, private router: Router) { }

  ngOnInit() {
    this.petpost.getpets(localStorage.getItem('userId')).subscribe(petdata => {
      this.showSpinner = false;
      this.petData = petdata;

    });
  }
  navigateToPetDetails(item) {
    localStorage.setItem('selectedPetId',item.pet_id)
    this.router.navigate(['/pet-details']);
  }
}
