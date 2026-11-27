import { Component, inject, Input, signal } from '@angular/core';
import { SideBar } from './shared/components/side-bar/side-bar';
import { FormsModule } from '@angular/forms';
import { Heading } from './shared/components/heading/heading/heading';
import { User } from './shared/models/user.model';
import { LoginCredentials } from './shared/models/loginCredentials.model';
import { Counter } from './shared/components/counter/counter';


@Component({
  imports: [SideBar, FormsModule, Heading, Counter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');

  count: number= 0;

  increment() {
    this.count++;
  }

  heading = 'My App Heading';
  user:User={
    id: 0, 
    name: "", 
    role: "user"
  };

  OnLogin(credentials: LoginCredentials) {
    this.user.name = credentials.username;
  }

  OnLogout() {
    console.log('Logout event received in App component');
    this.user.name = "";
  }
}
