import { Component } from '@angular/core';

@Component({
  selector: 'mca-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public apiEndpoint = '/articles';
}
