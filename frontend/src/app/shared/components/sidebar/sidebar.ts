import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() isOpen = false;
  @Output() sidebarClose = new EventEmitter<void>();
  @Output() categorySelect = new EventEmitter<string>();

  totalBooks = 156;

  mangaCategories: Category[] = [
    { name: 'Naruto', icon: '🍃', bookCount: 24 },
    { name: 'One Piece', icon: '🏴‍☠️', bookCount: 31 },
    { name: 'Dragon Ball', icon: '🐉', bookCount: 18 },
    { name: 'Attack on Titan', icon: '⚔️', bookCount: 15 },
    { name: 'My Hero Academia', icon: '🦸‍♂️', bookCount: 12 },
  ];

  novelCategories: Category[] = [
    { name: 'Fantasy', icon: '🗡️', bookCount: 22 },
    { name: 'Adventure', icon: '🌟', bookCount: 18 },
    { name: 'Romance', icon: '💕', bookCount: 14 },
    { name: 'Mystery', icon: '🔍', bookCount: 8 },
  ];

  merchCategories: Category[] = [
    { name: 'Figurines', icon: '🎭', bookCount: 25 },
    { name: 'Posters', icon: '🖼️', bookCount: 33 },
    { name: 'Accessories', icon: '👑', bookCount: 19 },
  ];

  closeSidebar() {
    this.sidebarClose.emit();
  }

  selectCategory(category: string) {
    this.categorySelect.emit(category);
  }
}
