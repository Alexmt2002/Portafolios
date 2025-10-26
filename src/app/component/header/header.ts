import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon,MatButtonModule,MatMenuModule, MatMenu, MatTooltip],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
