import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mca-error-messages',
  styleUrls: ['error-messages.component.scss'],
  templateUrl: 'error-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesComponent {
  @Input('messages') messagesProps: string = 'Something went wrong...';
}
