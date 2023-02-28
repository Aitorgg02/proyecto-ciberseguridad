import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { User } from 'src/app/models/user';
import { FormsModule } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/servicios/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';


  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private errorService: ErrorService) { }

  ngOnInit(): void {

  }

  login(form: NgForm) {
    if (form.value.email == '' || form.value.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
    } else {
      const user: User = {
        email: this.email,
        password: this.password
      }

      this.authService.login(form.value).subscribe({
        next: (token) => {
          localStorage.setItem('token', token.accessToken);
          this.router.navigate(['/aterrizaje'])
        },
        error: (e: HttpErrorResponse) => {
          this.errorService.msgError(e);
        }
      })
    }
  }


}