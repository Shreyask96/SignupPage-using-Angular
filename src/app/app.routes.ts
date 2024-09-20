import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';  // Adjust the path as necessary

// Define the routes array here
export const appRoutes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent }
];
