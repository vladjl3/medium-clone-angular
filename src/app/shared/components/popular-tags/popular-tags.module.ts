import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessagesModule } from '../error-messages/error-messages.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagsComponent } from './popular-tags.component';
import { PopularTagsService } from './services/popular-tags.service';
import { GetPopularTagsEffect } from './store/effects/popular-tags.effects';
import * as popularTags from './store/popular-tags.reducer';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    LoadingModule,
    ErrorMessagesModule,
    RouterModule,
    StoreModule.forFeature(popularTags.featureName, popularTags.reducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
