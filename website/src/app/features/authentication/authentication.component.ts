import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpt-authentication',
  template: `
    <div class="auth-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
