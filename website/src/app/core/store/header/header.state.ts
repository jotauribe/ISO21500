import { HeaderState } from './header.state';
export interface HeaderState {
  projects: number;
}

export const initialState: HeaderState = {
  projects: 0
};
