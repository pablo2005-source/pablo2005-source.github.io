import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Build timestamp injected to force new bundle hash on deploy
(window as any).__BUILD_TS = '20260515T123700';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Flowbite JS (components that require JS)
import 'flowbite';
