import { AuthStateInterface } from '@app/modules/auth/types/auth-state.interface';
import { FeedStateInterface } from '../components/feed/types/feed-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
