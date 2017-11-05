import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
// pass in App you want to run in browser
platform.bootstrapModule(AppModule);
