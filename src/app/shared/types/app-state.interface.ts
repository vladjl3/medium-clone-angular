import { AuthStateInterface } from '@app/modules/auth/types/auth-state.interface';
import { FeedStateInterface } from '../components/feed/types/feed-state.interface';
import { PopularTagsStateInterface } from '../components/popular-tags/types/popular-tags-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
}
