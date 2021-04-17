import { Component, OnInit } from '@angular/core';
import { landingPageText } from 'src/app/core/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  text: string[] = [];

  animateEmoji: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.text = landingPageText;
  }

  performAnimateEmoji() {
    this.animateEmoji = true;
    setTimeout(() => {
      this.animateEmoji = false;
    }, 800);
  }
}
