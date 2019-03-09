import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects';
import { environment } from './../../../environments/environment';
import { CoreReducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(CoreReducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreStoreModule {}
