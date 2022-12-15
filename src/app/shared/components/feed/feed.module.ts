import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessagesModule } from '../error-messages/error-messages.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { FeedComponent } from './feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/get-feed.effects';
import * as FeedReducer from './store/feed.reducer';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    ErrorMessagesModule,
    LoadingModule,
    RouterModule,
    PaginationModule,
    TagListModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(FeedReducer.featureName, FeedReducer.reducer),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
