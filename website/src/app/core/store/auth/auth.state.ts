import { User } from '../../models/user.model';

export interface AuthState {
  isUserAuthenticated: boolean;
  user: User | null;
}
