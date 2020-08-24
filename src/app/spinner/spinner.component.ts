import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {

  constructor() { }
  @Input() size: number = 60;
  @Input() show: boolean;

  ngOnInit() {
  }

}
