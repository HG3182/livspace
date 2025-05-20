import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentIndex = 0; // Track the current testimonial index
  carouselTransform = 'translateX(0%)'; // CSS transform to slide the carousel

  testimonials = [
    {
      quote: `"CIO Excellence Magazine has been a fantastic partner for us. The team's dedication to quality and timely delivery made sharing our sustainability initiatives a breeze. We’re thrilled with the positive feedback from our feature!"`,
      name: 'Andrea Ruotolo',
      role: 'Global Head of Customer Sustainability, Rockwell Automation'
    },
    {
      quote: `"Our experience with CIO Excellence was excellent! The professionalism of the team stood out, and being featured has significantly boosted our visibility. Their support was invaluable throughout the process."`,
      name: 'Ashley Vallett',
      role: 'Talent Acquisition Specialist'
    },
    {
      quote: `"I couldn’t be happier with the service. Our feature beautifully showcased our work, and the attention to detail was impressive. This collaboration has truly enhanced our brand presence."`,
      name: 'Ayisha Piotti',
      role: 'CEO, Visionary AI Expert'
    },
    {
      quote: `"CIO Excellence Magazine provided an incredible platform for sharing our insights on AI and data science. The support we received was top-notch, and the final product exceeded our expectations. It’s been a rewarding experience!"`,
      name: 'Dr. Kathrin Kind',
      role: 'Chief Data Scientist and AI Director'
    },
    {
      quote: `" Team is creative and professional, making the entire process enjoyable. Our feature highlighted our AI advancements perfectly, and we appreciate their timely assistance."`,
      name: 'Elizabeth Lukas',
      role: 'AutogenAI'
    },
    {
      quote: `"I am genuinely impressed with services. From start to finish, they delivered exceptional quality and creativity in showcasing our story. This feature has greatly increased our visibility in the industry."`,
      name: 'Janet Schijns',
      role: 'CEO of JS Group'
    },
    // Add more testimonials as needed
  ];

  moveCarousel(direction: number): void {
    const totalItems = this.testimonials.length;
    this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
    this.carouselTransform = `translateX(-${this.currentIndex * 100}%)`; // Update the transform to slide the carousel
  }

}
