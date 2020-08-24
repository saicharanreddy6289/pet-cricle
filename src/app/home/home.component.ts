import { Component, OnInit } from '@angular/core';
import { Slider } from './slider.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sliderData: Slider[] = [
    {
      imagePath: 'assets/images/1.jpg',
      headerText: 'We Make Pets Happy',
      description: 'Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem',
    },
    {
      imagePath: 'assets/images/2.jpg',
      headerText: 'We Make you Happy',
      description: 'Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem',
    },
    {
      imagePath: 'assets/images/3.jpg',
      headerText: 'We Connect your pets',
      description: 'Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem',
    },
    {
      imagePath: 'assets/images/4.jpg',
      headerText: 'We make you to care your pet',
      description: 'Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem',
    },
    {
      imagePath: 'assets/images/5.jpg',
      headerText: 'To make your pet play, we\'are here',
      description: 'Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem',
    }, {
      imagePath: 'assets/images/6.jpg',
      headerText: 'We find partners for your pet',
      description: 'Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem',
    }
  ];
  constructor(private routes: Router) { }
  goToSign() {
    this.routes.navigate(['/register']);
  }
  ngOnInit() {
  }

}
