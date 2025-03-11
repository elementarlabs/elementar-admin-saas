import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-check.component.html',
  styleUrl: './login-check.component.scss'
})
export class LoginCheckComponent implements OnInit {
  private _router = inject(Router);

  ngOnInit() {

  }
}
