import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.supabaseAuth.login(email, password);
    }
  }

  ngOnInit() {
    // console.log('getSession return value');
    // this.supabaseAuth.getSession().then(session => console.log(session));
    // console.log('Login session print');
    // console.log(this.supabaseAuth.getSession());
  }

  constructor(private supabaseAuth: SupabaseAuthService) {}
}
