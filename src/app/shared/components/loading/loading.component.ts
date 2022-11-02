import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mca-loading',
  styleUrls: ['loading.component.scss'],
  templateUrl: 'loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
