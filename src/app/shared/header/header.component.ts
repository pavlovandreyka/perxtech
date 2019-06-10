import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'appear', [
        transition(':enter', [
          style({
            overflow: 'hidden',
            height: 0,
            opacity: 0,
          }),
          animate('700ms ease-in-out', style({height: '*', opacity: 1}))
        ]),
        transition(':leave', [
          style({
            opacity: 1,
            overflow: 'hidden',
            height: '*',
          }),
          animate('700ms ease-in-out', style({height: '0px', opacity: 0}))
        ])
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
