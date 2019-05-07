import { User } from '../../models/user.model';

export interface AuthState {
  isAuthInProgress: boolean;
  isUserAuthenticated: boolean;
  user: User | null;
}
