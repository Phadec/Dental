import { Component, signal } from '@angular/core';
import { DentalImageProcessor } from './dental-image-processor/dental-image-processor';

@Component({
  selector: 'app-root',
  imports: [DentalImageProcessor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dental-image-processor');
}
