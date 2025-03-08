import { ResetPasswordService } from './../../services/reset-password.service';
import { ToastrService } from 'ngx-toastr';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationMessagesComponent } from '../../../../shared/components/validation-messages/validation-messages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [ValidationMessagesComponent, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  private readonly resetPasswordService = inject(ResetPasswordService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  authForm!: FormGroup;
  isLoading = true;
  resMsg: string = '';
  resMsgSuccess: string = '';
  steps: number = 1;

  showToaster(msg: string) {
    this.toastr.success(msg, '', {
      progressBar: true,
      timeOut: 7000,
    });
  }

  sendEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  submitEmail() {
    this.resetPasswordService.verifyEmail(this.sendEmail.value).subscribe({
      next: (res) => {
        console.log(res);
        this.steps++;
        this.showToaster('Reset code sent to your email');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  submitCode() {
    this.resetPasswordService.verifyCode(this.verifyCode.value).subscribe({
      next: (res) => {
        console.log(res);
        this.steps++;
      },
    });
  }

  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      ),
    ]),
  });

  submitNewPassword() {
    this.resetPasswordService
      .resetPassword(this.resetPassword.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
      });
  }

  isShowPassword: boolean = true;
  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }
}
