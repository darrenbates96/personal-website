import { Component, OnInit } from '@angular/core';
import { CursorPosition } from 'src/app/core/componentModels';
import { landingPageText } from 'src/app/core/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  cursorPosition: CursorPosition = new CursorPosition();

  text: string[] = [];

  isPageLoading: boolean = true;
  animateCursor: boolean = false;
  animateEmoji: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.text = landingPageText;
    // TODO: Figure out amount of time to "load"
    setTimeout(() => {
      this.animatePageHelper();
    }, 3000);
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
    this.animateCursor = true;
    setTimeout(() => {
      this.isPageLoading = false;
      this.animateCursor = false;
    }, 600);
  }
}
