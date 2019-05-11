import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppSettingsService {
  settings = [];

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
  ) {}

  loadSettings() {
    const req = this.localStorageService.getSettings('appSettings');
    if (req) {
      this.settings = req;
    } else {
      this.getJSON();
      this.localStorageService.saveSettings('appSettings', this.settings);
    }
  }

  private getJSON() {
    return this.http.get('.assets/app-settings.json').subscribe(
      res => {
        this.localStorageService.saveSettings('appSettings', res['requests']);
      },
      () => this.getDefaultSettings(),
    );
  }

  private getDefaultSettings() {
    console.log(
      'Default settins has been used, app-settings.json was not found',
    );
    this.localStorageService.saveSettings('appSettings', this.settings);
  }
}
