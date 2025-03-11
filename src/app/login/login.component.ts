import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ButtonDirective } from '@elementar-ui/components/core';

@Component({
  imports: [
    RouterLink,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    ButtonDirective,
    MatFormField
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  readonly form = this._formBuilder.group({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
  });
  oAuthEnabled = signal(false);
  registrationEnabled = signal(true);
  oAuthProviders = signal<any[]>([]);
  loading = signal(false);
  emailSent = signal(false);

  login() {

  }
}
