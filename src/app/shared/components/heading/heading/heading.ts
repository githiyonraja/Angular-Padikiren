import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { LoginCredentials } from '../../../models/loginCredentials.model';

@Component({
  imports: [FormsModule],
  selector: 'app-heading',
  styleUrl: './heading.css',
  templateUrl: './heading.html',
})
export class Heading {
  @Input() user:User | undefined;

  @Output() credentialsSubmitted = new EventEmitter<LoginCredentials>();

  username = '';
  password = '';

  onSubmit() {
    this.credentialsSubmitted.emit({
      username: this.username,
      password: this.password,
    });
  }
}
