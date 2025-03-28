import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// @NgModule({
//   declarations: [HomeComponent],
//   imports: [BrowserModule, HttpClient, FormsModule],
//   providers: [],
//   bootstrap: [HomeComponent]
// })

export class AppComponent {
  title = 'twitter-clone';
}
