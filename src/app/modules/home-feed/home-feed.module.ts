import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeFeedComponent } from './components/home-feed.component';
import { HomeFeedRoutingModule } from './home-feed-routing.module';

@NgModule({
  declarations: [HomeFeedComponent],
  imports: [CommonModule, HomeFeedRoutingModule],
})
export class HomeFeedModule {}
