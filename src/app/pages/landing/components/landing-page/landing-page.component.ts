import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  animateEmoji: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  performAnimateEmoji() {
    this.animateEmoji = true;
    setTimeout(() => {
      this.animateEmoji = false;
    }, 800);
  }
}
