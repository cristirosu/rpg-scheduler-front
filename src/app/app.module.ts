import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { ChartsModule } from 'ng2-charts/ng2-charts';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import {ToastModule} from "ng2-toastr/ng2-toastr";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap/bootstrap.module";
import {ModalModule} from "angular2-modal/esm/index";
import {Ng2DatetimePickerModule} from "ng2-datetime-picker/dist/index";
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";
import {MdButtonModule} from "@angular2-material/button";
import {MdSidenavModule} from "@angular2-material/sidenav";
import {MdInputModule} from "@angular2-material/input";
import {SelectModule} from "ng2-select/index";
import {CustomModal} from "./pages/dashboard/tasks/task-edit.component";
import {CategoryService} from "./shared/services/category.service";
import {WebSocketService} from "./shared/services/websocket.service";
import {FriendsService} from "./shared/services/friends.service";
import {ToastService} from "./shared/services/toast.service";
import {AuthenticationService} from "./shared/services/authentication.service";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AchievementService} from "./shared/services/achievement.service";
import {TaskService} from "./shared/services/task.service";
import {UserService} from "./shared/services/user.service";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {FriendDetailsComponennt} from "./pages/friends-details/friend.details.component";
import {FriendDetailsModal} from "./pages/friends/friend.modal.component";
import {SettingsComponent} from "./pages/settings/settings.component";
// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    CustomModal,
    FriendDetailsModal
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    PagesModule,
    MdInputModule,
    MdSidenavModule,
    MdButtonModule,
    Angular2FontawesomeModule,
    Ng2DatetimePickerModule,
    ReactiveFormsModule,

    ModalModule.forRoot(),
    BootstrapModalModule,
    SelectModule,
    ToastModule.forRoot(),
    Ng2Bs3ModalModule,

    routing,

  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    CategoryService,
    UserService,
    CategoryService,
    TaskService,
    AchievementService,
    AuthGuard,
    AuthenticationService,
    ToastService,
    FriendsService,
    WebSocketService
  ],
  entryComponents: [CustomModal, FriendDetailsModal]
})

export class AppModule {

  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
