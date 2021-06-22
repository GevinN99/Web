import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [1, 2].map((n) =>  `../../../assets/main/s${n}.jpg`);

//--------------------------------
//--------------------------------

  slides = [
    {img: "../../../assets/main/Slider02-01.jpg", link: "/order", name: 'theory', price: '$11'},
    {img: "../../../assets/main/Slider02-02.jpg", link: "#2", name: 'helmut lang', price: '$22'},
    {img: "../../../assets/main/Slider02-03.jpg", link: "#3", name: 'nunushka', price: '$33'},
    {img: "../../../assets/main/Slider02-04.jpg", link: "#4", name: 'vince', price: '$44'},
    {img: "../../../assets/main/Slider02-05.jpg", link: "#5", name: 'lacoste', price: '$55'}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }


}
