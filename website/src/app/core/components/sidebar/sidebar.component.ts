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
      href: '_blank',
      title: 'Integration',
      icon: 'gpt_integration',
      isSvg: true
    },
    {
      href: '_blank',
      title: 'Resources',
      icon: 'gpt_resources',
      isSvg: true
    },
    {
      href: '_blank',
      title: 'Acquisitions',
      icon: 'gpt_acquisitions',
      isSvg: true
    }
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'gpt_integration',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/integration.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'gpt_resources',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/resources.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'gpt_acquisitions',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/acquisitions.svg'
      )
    );
  }

  ngOnInit() {}
}
