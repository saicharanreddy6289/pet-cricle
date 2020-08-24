import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PostService, postPets } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  alphalinvalid: Boolean;
  emailinvalid: Boolean;
  colorinvalid: Boolean;
  breedinvalid: Boolean;
  telephoneinvalid: Boolean;

  // api 
  postpets: postPets;
  breed: string;
  color: string;
  desc: string;
  name: string;
  gender: string="male";
  age: number;
  phoneno: number;
  email: string;
  category: string;
  income: string;
  care: string;
  imageUrl: string;


  constructor(private postservice: PostService) { }

  ngOnInit() {
  }


  postMissingPets() {
    console.log("into post missing pets");

    var params = {

      name: this.name,
      gender: this.gender,
      age: this.age,
      breed: this.breed,
      color: this.color,
      phoneno: this.phoneno,
      email: this.email,
      category: 'missing',
      desc: this.desc,
      image: this.imageUrl
    }

    console.log(this.name);
    console.log(params);

    this.postservice.postMissingPets(params)
      .subscribe((data: postPets) => this.postpets = data);

  }

  postAdoptionPets() {
    var params = {
      name: this.name,
      gender: this.gender,
      age: this.age,
      breed: this.breed,
      color: this.color,
      phoneno: this.phoneno,
      email: this.email,
      category: 'adoption',
      annual_income: this.income,
      care: this.care,
      image: this.imageUrl
    }


    console.log(params);

    this.postservice.postAdoptionPets(params)
      .subscribe((data: postPets) => this.postpets = data);
  }
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
  postPlaytimePets() {
    var params = {
      breed: this.breed,
      color: this.color,
      desc: this.desc
    }


    console.log(params);

    this.postservice.postPlaytimePets(params)
      .subscribe((data: postPets) => this.postpets = data);
  }


  show() {
    Swal.fire(
      'Thank you! Your post is created sucessfully!'
    );
  }

  validateform() {
    var only_alpha = /^([a-zA-z\s]{1,32})$/;
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var telephone = /^[0-9]*$/;

    //Name
    if ((<HTMLInputElement>document.getElementById("name")).value.match(only_alpha)) {
      this.alphalinvalid = false;
    }
    else {
      this.alphalinvalid = true;
    }

    //Breed
    if ((<HTMLInputElement>document.getElementById("breed")).value.match(only_alpha)) {
      this.breedinvalid = false;
    }
    else {
      this.breedinvalid = true;
    }

    //color
    if ((<HTMLInputElement>document.getElementById("color")).value.match(only_alpha)) {
      this.colorinvalid = false;
    }
    else {
      this.colorinvalid = true;
    }

    //email 
    if (!(<HTMLInputElement>document.getElementById("email")).value.match(mailformat)) {
      this.emailinvalid = true;
    }
    else {

      this.emailinvalid = false;
    }


    //Telephone
    if ((<HTMLInputElement>document.getElementById("telephone")).value.match(telephone)) {
      this.telephoneinvalid = false;
    }
    else {
      this.telephoneinvalid = true;
    }


  }

}
