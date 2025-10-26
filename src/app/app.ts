import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Header } from "./component/header/header";
import { Card } from './component/card/card';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, Header, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('proyecto1');
}
