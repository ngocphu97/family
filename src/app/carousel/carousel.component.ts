import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
      this.items = [
        { name: 'assets/images/HS2.jpg', personName: 'Nguyen Tai A' },
        { name: 'assets/images/HS3.jpg', personName: 'Nguyen Tai b' },
        { name: 'assets/images/HS10.jpg', personName: 'Nguyen Tai c' },
        { name: 'assets/images/HS11.jpg', personName: 'Nguyen Tai d' },
        { name: 'assets/images/HS2.jpg', personName: 'Nguyen Tai e' },
        { name: 'assets/images/HS3.jpg', personName: 'Nguyen Tai f' },
        { name: 'assets/images/HS10.jpg', personName: 'Nguyen Tai g' },
        { name: 'assets/images/HS11.jpg', personName: 'Nguyen Tai h' },
        { name: 'assets/images/HS2.jpg', personName: 'Nguyen Tai A' },
        { name: 'assets/images/HS3.jpg', personName: 'Nguyen Tai A' },
        { name: 'assets/images/HS10.jpg', personName: 'Nguyen Tai A' },
        { name: 'assets/images/HS11.jpg', personName: 'Nguyen Tai A' },
      ];
   }

  ngOnInit() {
  }

}
