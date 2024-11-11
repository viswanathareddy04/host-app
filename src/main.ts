import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import './single-spa-config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
