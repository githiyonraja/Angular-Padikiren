import { Component, signal } from '@angular/core';
import { SideBar } from './shared/side-bar/side-bar';


@Component({
  imports: [SideBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');
}
