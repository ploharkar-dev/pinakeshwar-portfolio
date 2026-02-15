import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from "../component/navbar/navbar";
import { Home } from "../component/home/home";

@Component({
  selector: 'app-main',
  imports: [Navbar, Home],
  templateUrl: './main.html',
  styleUrl: './main.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {

}
