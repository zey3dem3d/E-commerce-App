import { passwordMatchValidators } from './../../../../shared/helpers/password-match';
import { AuthService } from './../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationMessagesComponent } from '../../../../shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ValidationMessagesComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  authForm!: FormGroup;
  resMsg: string = '';
  resMsgSuccess: string = '';
  isLoading = true;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  formInit() {
    this.authForm = this.fb.group(
      {
        name: [
          null,
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(3),
          ],
        ],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],
        rePassword: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],
      },
      { validators: passwordMatchValidators }
    );
  }

  submitForm() {
    this.isLoading = false;

    if (this.authForm.valid || !this.isLoading) {
      this.authService.register(this.authForm.value).subscribe({
        next: (res) => {
          this.isLoading = true;
          if ((res.message = 'success')) {
            this.resMsgSuccess = res.message;
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
        },
        error: ({ error }) => {
          this.resMsg = error.message;
          this.isLoading = true;
        },
      });
    } else {
      this.authForm.get('rePassword')?.setValue(' ');
      this.authForm.markAllAsTouched();
    }
  }

  isShowPassword: boolean = true;
  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  ngOnInit(): void {
    this.formInit();
  }
}
