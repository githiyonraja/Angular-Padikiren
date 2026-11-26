import { Component, signal } from '@angular/core';
import { SideBar } from './shared/components/side-bar/side-bar';
import { FormsModule } from '@angular/forms';
import { Heading } from './shared/components/heading/heading/heading';
import { User } from './shared/models/user.model';
import { LoginCredentials } from './shared/models/loginCredentials.model';


@Component({
  imports: [SideBar,FormsModule,Heading],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');

  heading = 'My App Heading';
  user:User={
    id: 0, 
    name: "", 
    role: "user"
  };

  OnLogin(credentials: LoginCredentials) {
    this.user.name = credentials.username;
  }
}
