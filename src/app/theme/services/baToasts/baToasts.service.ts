import {Injectable} from '@angular/core';

// loading plugin (js and css)
import './baToastNotification.loader.ts';
// loading configuration class/interface
import {ToastConfig} from './models/ToastConfig';

@Injectable()
export class BaToastNotificationService {
  private _defaultConfig:ToastConfig;

  // setting default configuration
  constructor() {
    this._defaultConfig = {
      text: '',
      position: "bottom-right"
    }
  }

  // method to set app-wide default toast configuration
  setToastDefaults(toastConfig:ToastConfig) {
    this._defaultConfig = toastConfig;
  }

  // show toast
  showToast(message: string) {
    let tc = this.getToastConfig(message);
    console.log(tc);
    jQuery.toast(Object.assign(this._defaultConfig, tc));
  }

  // hide all toasts
  clearAllToasts() {
    jQuery.toast().reset('all');
  }

  getToastConfig(message: string):ToastConfig {
    return {
      text: this.formatMessage(message),
      heading: '',
      showHideTransition: 'fade',
      allowToastClose: false,
      hideAfter: 3500,
      stack: 3,
      position: 'bottom-center',
      textAlign: 'center',
      icon: 'info',
      loader: null,
      loaderBg: null,
      beforeShow: null,
      afterShow: null,
      beforeHide: null,
      afterHidden: null
    }
  }

  formatMessage(message: string){
    return "<span style='font-size: 120%'>"+message+"</span>";
  }
}
