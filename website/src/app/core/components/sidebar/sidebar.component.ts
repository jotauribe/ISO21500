import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links = [
    {
      href: 'integration',
      title: 'Integration',
      icon: 'gpt_integration',
      isSvg: true
    },
    {
      href: 'resources',
      title: 'Resources',
      icon: 'gpt_resources',
      isSvg: true
    },
    {
      href: 'acquisitions',
      title: 'Acquisitions',
      icon: 'gpt_acquisitions',
      isSvg: true
    }
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIconSet(
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/features.svg')
    );
  }

  ngOnInit() {}
}
