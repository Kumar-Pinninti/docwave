import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = 'kumar@gmail.com';
  password: string = 'Kumar@1';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password);
  }

}
