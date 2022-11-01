import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedComponent } from './feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/get-feed.effects';
import * as FeedReducer from './store/feed.reducer';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(FeedReducer.featureName, FeedReducer.reducer),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
