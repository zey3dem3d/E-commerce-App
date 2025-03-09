import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationMessagesComponent } from '../../../../shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'app-login',
  imports: [ValidationMessagesComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  resMsg: string = '';
  resMsgSuccess: string = '';
  isLoading = true;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  formInit() {
    this.authForm = this.fb.group({
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
    });
  }

  submitForm() {
    this.isLoading = false;

    if (this.authForm.valid || !this.isLoading) {
      this.authService.login(this.authForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = true;
          if ((res.message = 'success')) {
            this.resMsgSuccess = res.message;
            setTimeout(() => {
              this.authService.saveToken(res.token);
              this.router.navigate(['/home']);
            }, 1000);
          }
        },
        error: ({ error }) => {
          this.resMsg = error.message;
          this.isLoading = true;
        },
      });
    } else {
      this.authForm.get('rePassword')?.setValue('');
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
