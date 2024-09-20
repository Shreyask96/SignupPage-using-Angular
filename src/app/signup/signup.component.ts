import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // For ngModel
import { CommonModule } from '@angular/common'; // For ngIf

@Component({
  selector: 'app-signup',
  standalone: true, // Standalone component
  imports: [FormsModule, CommonModule],  // Import FormsModule and CommonModule
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
