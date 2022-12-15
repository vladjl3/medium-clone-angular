import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopularTagType } from '@app/shared/types/popular-tag.type';

@Component({
  selector: 'mca-tag-list',
  styleUrls: ['tag-list.component.scss'],
  templateUrl: 'tag-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagType[];
}
