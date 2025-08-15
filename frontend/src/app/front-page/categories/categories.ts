import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  categories: Category[] = [
    {
      id: 1,
      name: 'Fiction',
      description:
        'Escape into imaginary worlds with our collection of novels, short stories, and fantasy tales.',
      icon: '📖',
      bookCount: 2500,
      color: 'var(--naruto-orange)',
    },
    {
      id: 2,
      name: 'Non-Fiction',
      description: 'Learn and grow with biographies, self-help, history, and educational content.',
      icon: '🧠',
      bookCount: 1800,
      color: 'var(--naruto-blue)',
    },
    {
      id: 3,
      name: 'Science & Technology',
      description: 'Stay updated with the latest in science, technology, and innovation.',
      icon: '🔬',
      bookCount: 950,
      color: 'var(--naruto-navy)',
    },
    {
      id: 4,
      name: 'Manga & Comics',
      description: 'Dive into the world of Japanese manga and graphic novels.',
      icon: '🎌',
      bookCount: 1200,
      color: 'var(--naruto-orange)',
    },
    {
      id: 5,
      name: 'Business',
      description: 'Enhance your professional skills with business and entrepreneurship books.',
      icon: '💼',
      bookCount: 850,
      color: 'var(--naruto-blue)',
    },
    {
      id: 6,
      name: 'Arts & Culture',
      description: 'Explore creativity through art, music, literature, and cultural studies.',
      icon: '🎨',
      bookCount: 600,
      color: 'var(--naruto-navy)',
    },
  ];
}
