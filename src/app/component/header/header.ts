import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
