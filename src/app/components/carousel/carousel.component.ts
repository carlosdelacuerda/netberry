import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
}) 
export class CarouselComponent implements OnInit {

  
carousel;
leftArrow;
rightArrow;
left: number= 0 ;
right: number= 0;

  constructor() {
    
   }

  ngOnInit(): void {
   this.carousel = document.querySelector('.moving figure:first-child');
   this.leftArrow = document.querySelector('.left-arrow');
   this.rightArrow = document.querySelector('.right-arrow');
   this.leftArrow.style.opacity = 0.2;
  }

  clickRight(){
    if (this.left > -65) {
      this.left -= 33.33;
      this.carousel.style.marginLeft = this.left+'%';
      this.leftArrow.style.opacity = 1;
    }
    else if (this.left = -33.33) {
      this.rightArrow.style.opacity = 0.2;
    }
  }

  //swipe, touchstart, touchmove

  clickLeft(){
    if (this.left < 0) {
      this.left += 33.33;
      this.carousel.style.marginLeft = this.left+'%';
      this.rightArrow.style.opacity = 1;
    } else if (this.left >= 0) {
      this.leftArrow.style.opacity = 0.2;
    }
    
  }

}
