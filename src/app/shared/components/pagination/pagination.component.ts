import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'mca-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input('totalItemsCount') totalItemsCountProps: number;
  @Input('perPageLimit') perPageLimitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('baseUrl') baseUrlProps: string;

  pagesCount: number;
  pages: Array<number>;

  constructor() {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(
      this.totalItemsCountProps / this.perPageLimitProps
    );
    this.pages = [...Array(this.pagesCount).keys()].map((el) => el + 1);
  }
}
