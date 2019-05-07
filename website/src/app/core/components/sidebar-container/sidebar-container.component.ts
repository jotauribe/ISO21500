import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-sidebar-container',
  template: `
    <mat-sidenav-container id="content">
      <mat-sidenav mode="side" opened>
        <ng-content select="[sidebar]"></ng-content>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content select="[content]"></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
