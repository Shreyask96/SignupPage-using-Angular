import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';  // Import provideRouter
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';  // Your routes configuration

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)  // Set up routing with appRoutes
  ]
}).catch(err => console.error(err));

