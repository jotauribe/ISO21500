import { Params, RouterStateSnapshot } from '@angular/router';

export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
}
