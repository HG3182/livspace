import { Component } from '@angular/core';

@Component({
  selector: 'app-howitwork',
  standalone: false,
  templateUrl: './howitwork.component.html',
  styleUrl: './howitwork.component.css'
})
export class HowitworkComponent {
  steps = [
    { number: 1, label: 'Meet Designer', image: 'hiw1.jpg' },
    { number: 2, label: 'Book Moduluxe', image: 'hiw2.avif' },
    { number: 3, label: 'Execution begins', image: 'hiw3.jpg' },
    { number: 4, label: 'Final Installations', image: 'hiw4.avif' },
    { number: 5, label: 'Move in', image: 'hiw5.jpg' },
  ];
}
