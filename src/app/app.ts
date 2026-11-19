import { Component, signal } from '@angular/core';
import { SideBar } from './shared/side-bar/side-bar';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [SideBar,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');
  name = 'Githiyon';
}
