import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-acquisitions',
  templateUrl: './acquisitions.component.html',
  styleUrls: ['./acquisitions.component.scss']
})
export class AcquisitionsComponent implements OnInit {
  navLinks = [
    { path: ['providers'], label: 'Proveedores' },
    { path: ['acquisitions'], label: 'Adquisiciones' }
  ];

  constructor() {}

  ngOnInit() {}
}
