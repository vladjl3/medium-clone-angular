import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './container/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FeedModule } from '../../shared/components/feed/feed.module';
import { BannerModule } from '@app/shared/components/banner/banner.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, FeedModule, BannerModule],
})
export class HomePageModule {}
