import { Component, OnInit } from '@angular/core';
import { PetpostserviceService } from './petpostservice.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-postpet',
  templateUrl: './postpet.component.html',
  styleUrls: ['./postpet.component.sass']
})
export class PostpetComponent implements OnInit {

  pet_name: string = "";
  pet_age: string = "";
  pet_gender: string = "";
  pet_color: string = "";
  pet_breed: string = "";
  imageUrl: string = "";
  pet_description: string = "";
  petData: any = {};
  validation: boolean = true;
  constructor(private PetpostserviceService: PetpostserviceService, private router: Router) { }
  subscription;
  ngOnInit() {

    this.pet_age = "";
    this.pet_breed = "";
    this.pet_color = "";
    this.pet_gender = "";
    this.pet_name = "";
    this.imageUrl = "";
    this.pet_description = "";
    this.petData = {};
    this.validation = true;

  }
  // below code is used to encode the image uploaded to a text


  //Image conversion to base64:  https://stackoverflow.com/questions/48216410/angular-4-base64-upload-component
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var imagepattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(imagepattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  //image is converted into url here
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageUrl = reader.result;

  }
  add_pet() {

    // validating input user values
    if (this.pet_age == "" || this.pet_breed == "" || this.pet_color == "" || this.pet_description == "" || this.pet_gender == "" || this.pet_name == "") {
      this.validation = false;
    }
    if (this.validation == true) {
      this.petData = {
        pet_age: this.pet_age,
        pet_name: this.pet_name,
        imageUrl: this.imageUrl,
        pet_color: this.pet_color,
        pet_gender: this.pet_gender,
        pet_description: this.pet_description,
        pet_breed: this.pet_breed,
        owner_id: localStorage.getItem('userId')

      }

      this.subscription = this.PetpostserviceService.addpet(this.petData).subscribe(petdata => {

        this.petData = petdata;

        Swal.fire(
          "pet profile created"
        );
      });
      setTimeout(() => {
    
        this.router.navigate(['/your-pets']);
      }, 1000)


      // set a time out of 2000 before navigating to the pet details page to facilitate load of data from back end

    }
    else {
      alert("missing required fields");
      this.validation = true;
    }

  }
  // on cancel user will navigate to pet details page. 
  cancel_pet() {
    this.router.navigate(['/pet-details']);
  }

}

