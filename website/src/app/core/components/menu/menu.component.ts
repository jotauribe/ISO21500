import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  NgZone,
  Inject
} from '@angular/core';
import {
  MatMenu,
  MAT_MENU_DEFAULT_OPTIONS,
  MatMenuDefaultOptions
} from '@angular/material';
import { Options } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  exportAs: 'appMenu'
})
export class MenuComponent implements OnInit {
  @Input() title;

  @Input() options;

  @ViewChild(MatMenu) ref: MatMenu;

  constructor() {}

  ngOnInit() {}

  triggerAction(action) {
    if (action) {
      action();
    }
  }
}
