import { Component, OnInit } from '@angular/core';
import { landingPageText } from 'src/app/core/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  text: string[] = [];

  isPageLoading: boolean = true;
  animateEmoji: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.text = landingPageText;
    this.animatePageHelper();
  }

  performAnimateEmoji() {
    this.animateEmoji = true;
    setTimeout(() => {
      this.animateEmoji = false;
    }, 800);
  }

  animatePageHelper() {
    setTimeout(() => {
      this.isPageLoading = false;
    }, 1000);
  }
}
