import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mca-banner',
  styleUrls: ['banner.component.scss'],
  templateUrl: 'banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
