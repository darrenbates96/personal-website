import { Component, OnInit } from '@angular/core';
import { CursorPosition } from 'src/app/core/componentModels';
import { landingPageText } from 'src/app/core/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  cursorPosition: CursorPosition = {
    left: '50%',
    top: '50%',
  };

  text: string[] = [];

  isPageLoading: boolean = true;
  animateEmoji: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.text = landingPageText;
    this.animatePageHelper();
  }

  performCustomCursor($event: MouseEvent) {
    this.cursorPosition.left = $event.pageX + 'px';
    this.cursorPosition.top = $event.pageY + 'px';
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
    }, 3000);
  }
}
