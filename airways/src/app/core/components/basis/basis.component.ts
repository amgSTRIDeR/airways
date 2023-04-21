import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basis',
  templateUrl: './basis.component.html',
  styleUrls: ['./basis.component.scss'],
})
export class BasisComponent implements OnInit {
  private images: string[] = [
    'main-background-1.jpg',
    'main-background-2.jpg',
    'main-background-3.jpg',
    'main-background-4.jpg',
    'main-background-5.jpg',
    'main-background-6.jpg',
    'main-background-7.jpg',
  ];

  public currentBgImage = '';

  ngOnInit() {
    this.setRandomBgImage();
    setInterval(() => this.setRandomBgImage(), 300000);
  }

  private setRandomBgImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.currentBgImage = `url(../../../../assets/images/${this.images[randomIndex]})`;
  }
}
