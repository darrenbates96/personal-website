import { Component, OnInit } from '@angular/core';
import { aboutComponentText } from 'src/app/core/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  text: string[] = aboutComponentText;

  constructor() {}

  ngOnInit(): void {}
}
