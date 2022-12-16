import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './container/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FeedModule } from '../../shared/components/feed/feed.module';
import { BannerModule } from '@app/shared/components/banner/banner.module';
import { PopularTagsModule } from '../../shared/components/popular-tags/popular-tags.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, FeedModule, BannerModule, PopularTagsModule],
})
export class HomePageModule {}
