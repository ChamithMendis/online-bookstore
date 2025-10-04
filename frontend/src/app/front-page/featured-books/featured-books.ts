import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-books',
  imports: [CommonModule],
  templateUrl: './featured-books.html',
  styleUrl: './featured-books.scss',
})
export class FeaturedBooks {
  featuredBooks: Book[] = [
    {
      id: 1,
      title: 'The Art of War',
      author: 'Sun Tzu',
      price: 1299,
      originalPrice: 1899,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Philosophy',
    },
    {
      id: 2,
      title: 'Digital Minimalism',
      author: 'Cal Newport',
      price: 1599,
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
    },
    {
      id: 3,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 1399,
      originalPrice: 1999,
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fiction',
    },
    {
      id: 4,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 1699,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Self-Help',
    },
  ];

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}
